import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_HOSTNAME, SITE_URL } from '@/lib/site-url';

const COUPON = 'MAMAEDECORA10';
const WA_NUMBER = '5511977336703';

export async function POST(req: NextRequest) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!resendApiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: 'Serviço de e-mail não configurado.' },
      { status: 503 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const { nome, email, data } = await req.json();

    if (!nome || !email) {
      return NextResponse.json({ error: 'Nome e e-mail são obrigatórios.' }, { status: 400 });
    }

    const dataFormatada = data
      ? new Date(data + 'T00:00:00').toLocaleDateString('pt-BR', {
          day: '2-digit', month: 'long', year: 'numeric',
        })
      : null;

    const waMsg = encodeURIComponent(
      `Olá, Ana! Meu nome é ${nome} e acabei de cadastrar no site. ` +
      `Quero usar meu cupom *${COUPON}* para ganhar 10% OFF na locação` +
      (dataFormatada ? ` para o dia ${dataFormatada}` : '') + `. Pode me ajudar?`
    );

    // Notificação para a Ana
    await resend.emails.send({
      from: `Mamãe Decora <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `🎉 Novo lead: ${nome}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0508;color:#fff;padding:32px;border-radius:16px;">
          <h2 style="color:#ec4899;margin-top:0;">Novo lead no site!</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${email}" style="color:#ec4899;">${email}</a></p>
          ${dataFormatada ? `<p><strong>Data prevista da festa:</strong> ${dataFormatada}</p>` : ''}
          <p><strong>Cupom gerado:</strong> <code style="background:#ec4899;color:#fff;padding:2px 8px;border-radius:4px;">${COUPON}</code></p>
          <hr style="border-color:#333;margin:24px 0;"/>
          <a href="https://wa.me/${WA_NUMBER}?text=${waMsg}" style="background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;">
            Responder no WhatsApp
          </a>
          <p style="color:#666;font-size:12px;margin-top:24px;">Lead capturado via ${SITE_HOSTNAME}</p>
        </div>
      `,
    });

    // Confirmação para o lead
    await resend.emails.send({
      from: `Ana — Mamãe Decora <${fromEmail}>`,
      to: [email],
      subject: `Oi ${nome.split(' ')[0]}! Seu cupom de 10% OFF chegou 🎀`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0508;color:#fff;padding:32px;border-radius:16px;">
          <h1 style="color:#ec4899;font-size:28px;margin-top:0;">Oi, ${nome.split(' ')[0]}! 🎉</h1>
          <p style="color:#ccc;line-height:1.6;">
            Obrigada por se cadastrar! Aqui está seu cupom exclusivo de <strong style="color:#ec4899;">10% OFF</strong> na sua primeira locação:
          </p>

          <div style="background:#1a0a10;border:2px dashed #ec4899;border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
            <p style="margin:0 0 8px;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Seu cupom</p>
            <p style="margin:0;font-size:32px;font-weight:900;color:#ec4899;letter-spacing:4px;">${COUPON}</p>
            <p style="margin:8px 0 0;color:#666;font-size:12px;">Válido na sua primeira locação. Apresente no WhatsApp.</p>
          </div>

          <p style="color:#ccc;line-height:1.6;">
            Seu <strong>Guia de Planejamento de Festas</strong> está pronto! Baixe agora
            e descubra o checklist completo, passo a passo de montagem e 5 dicas de ouro.
          </p>

          <div style="margin:24px 0;text-align:center;">
            <a href="${SITE_URL}/api/guia-pdf"
              style="background:#1a0a10;color:#ec4899;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:900;font-size:15px;display:inline-block;border:2px solid #ec4899;">
              ⬇ Baixar Guia de Planejamento (PDF)
            </a>
          </div>

          <div style="margin:24px 0;text-align:center;">
            <a href="https://wa.me/${WA_NUMBER}?text=${waMsg}"
              style="background:#ec4899;color:#fff;padding:16px 32px;border-radius:12px;text-decoration:none;font-weight:900;font-size:16px;display:inline-block;">
              Usar meu cupom agora
            </a>
          </div>

          ${dataFormatada ? `<p style="color:#999;font-size:14px;">📅 Vi que você quer decorar para <strong>${dataFormatada}</strong>. Me chama no WhatsApp para verificarmos disponibilidade!</p>` : ''}

          <hr style="border-color:#333;margin:24px 0;"/>
          <p style="color:#555;font-size:12px;text-align:center;">
            Mamãe Decora Atibaia · Jardim Cerejeiras, Atibaia - SP<br/>
            <a href="https://wa.me/${WA_NUMBER}" style="color:#ec4899;">WhatsApp</a> ·
            <a href="https://www.instagram.com/ana4849/" style="color:#ec4899;">Instagram</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Erro ao enviar. Tente novamente.' }, { status: 500 });
  }
}
