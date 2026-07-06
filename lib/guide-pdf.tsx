import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import { SITE_HOSTNAME } from '@/lib/site-url';

const PINK = '#ec4899';
const PINK_DARK = '#be185d';
const DARK = '#0a0508';
const DARK2 = '#1a0a10';
const DARK3 = '#2a1020';
const WHITE = '#ffffff';
const GRAY = '#9ca3af';
const GRAY_LIGHT = '#d1d5db';

const s = StyleSheet.create({
  page: { backgroundColor: DARK, color: WHITE, fontFamily: 'Helvetica', padding: 0 },

  // Cover
  coverHeader: { backgroundColor: PINK, padding: 40, paddingBottom: 32 },
  coverTag: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#fff', letterSpacing: 4, textTransform: 'uppercase', opacity: 0.8 },
  coverTitle: { fontSize: 42, fontFamily: 'Helvetica-Bold', color: WHITE, marginTop: 12, lineHeight: 1.1 },
  coverSubtitle: { fontSize: 20, fontFamily: 'Helvetica', color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  coverBody: { padding: 40, flex: 1 },
  coverTagline: { fontSize: 13, color: GRAY_LIGHT, lineHeight: 1.6, marginBottom: 32 },
  coverHighlight: { backgroundColor: DARK3, borderLeft: '4px solid ' + PINK, padding: 20, borderRadius: 8, marginBottom: 24 },
  coverHighlightText: { fontSize: 12, color: WHITE, lineHeight: 1.6 },
  coverFooter: { borderTop: '1px solid ' + DARK3, paddingTop: 20, marginTop: 'auto' },
  coverFooterText: { fontSize: 10, color: GRAY, textAlign: 'center' },
  coverStar: { color: PINK, fontSize: 10 },

  // Content pages
  contentPage: { backgroundColor: DARK, padding: 0 },
  pageHeader: { backgroundColor: DARK2, padding: 24, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  pageNum: { width: 32, height: 32, backgroundColor: PINK, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  pageNumText: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: WHITE },
  pageTitle: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: WHITE },
  pageSubtitle: { fontSize: 10, color: GRAY, marginTop: 2 },
  content: { padding: 28 },

  // Timeline (Checklist)
  timelineGroup: { marginBottom: 20 },
  timelineLabel: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: PINK, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 },
  timelineItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6, gap: 8 },
  timelineDot: { width: 6, height: 6, backgroundColor: PINK, borderRadius: 3, marginTop: 5, flexShrink: 0 },
  timelineText: { fontSize: 11, color: GRAY_LIGHT, flex: 1, lineHeight: 1.5 },

  // Steps
  stepCard: { flexDirection: 'row', gap: 14, marginBottom: 14, backgroundColor: DARK2, padding: 14, borderRadius: 8 },
  stepNum: { width: 36, height: 36, backgroundColor: PINK, borderRadius: 18, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  stepNumText: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: WHITE },
  stepContent: { flex: 1 },
  stepTitle: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: WHITE, marginBottom: 3 },
  stepDesc: { fontSize: 10, color: GRAY, lineHeight: 1.5 },

  // Tips
  tipCard: { flexDirection: 'row', gap: 12, marginBottom: 12, padding: 14, borderRadius: 8, backgroundColor: DARK2 },
  tipIcon: { width: 32, height: 32, backgroundColor: DARK3, borderRadius: 6, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  tipIconText: { fontSize: 16 },
  tipContent: { flex: 1 },
  tipTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: WHITE, marginBottom: 3 },
  tipText: { fontSize: 10, color: GRAY, lineHeight: 1.5 },

  // Coupon page
  couponPage: { backgroundColor: DARK, padding: 0, alignItems: 'center', justifyContent: 'center' },
  couponBody: { padding: 40, width: '100%', alignItems: 'center' },
  couponTag: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: PINK, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' },
  couponH1: { fontSize: 32, fontFamily: 'Helvetica-Bold', color: WHITE, textAlign: 'center', marginBottom: 6 },
  couponDesc: { fontSize: 13, color: GRAY, textAlign: 'center', marginBottom: 32, lineHeight: 1.5 },
  couponBox: { width: '80%', backgroundColor: DARK2, borderRadius: 16, padding: 32, alignItems: 'center', marginBottom: 32, borderWidth: 2, borderColor: PINK, borderStyle: 'dashed' },
  couponBoxLabel: { fontSize: 9, color: GRAY, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 },
  couponCode: { fontSize: 36, fontFamily: 'Helvetica-Bold', color: PINK, letterSpacing: 6, marginBottom: 8 },
  couponBoxNote: { fontSize: 10, color: GRAY, textAlign: 'center', lineHeight: 1.5 },
  couponContact: { flexDirection: 'row', gap: 20, marginBottom: 32 },
  couponContactItem: { alignItems: 'center', gap: 4 },
  couponContactLabel: { fontSize: 8, color: GRAY, letterSpacing: 2, textTransform: 'uppercase' },
  couponContactValue: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: WHITE },
  couponFooter: { fontSize: 9, color: GRAY, textAlign: 'center', lineHeight: 1.6 },
});

const CHECKLIST = [
  {
    period: '3 Meses Antes',
    items: [
      'Definir o tema da festa (consulte nosso catálogo)',
      'Reservar o kit com a Mamãe Decora',
      'Estimar número de convidados',
      'Escolher o local da festa',
    ],
  },
  {
    period: '1 Mês Antes',
    items: [
      'Confirmar endereço e horário de entrega do kit',
      'Comprar itens complementares (bolo, doces, roupa)',
      'Avisar convidados com lembrancinha ou convite',
      'Organizar o espaço onde será a decoração',
    ],
  },
  {
    period: '1 Semana Antes',
    items: [
      'Receber confirmação de entrega do kit',
      'Testar disposição dos móveis no espaço',
      'Preparar lista de fotos que quer tirar',
    ],
  },
  {
    period: 'Dia da Festa',
    items: [
      'Receber o kit (entregamos embalado e limpo)',
      'Seguir o guia de montagem incluso no kit',
      'Fotografar a decoração antes dos convidados chegarem',
      'Curtir a festa sem estresse!',
      'Devolver o kit após o evento',
    ],
  },
];

const STEPS = [
  {
    title: 'Receba o Kit',
    desc: 'Entregamos tudo embalado, limpo e identificado na sua casa ou local da festa. Cada peça vem etiquetada para facilitar.',
  },
  {
    title: 'Comece pelo Pano de Fundo',
    desc: 'Monte primeiro o backdrop (painel de fundo). Ele define o ponto focal da decoração e facilita o posicionamento dos demais itens.',
  },
  {
    title: 'Posicione a Mesa Principal',
    desc: 'Coloque a toalha e os elementos centrais da mesa do bolo. Use o centro como referência para distribuir os outros itens.',
  },
  {
    title: 'Adicione os Detalhes',
    desc: 'Distribua personagens, enfeites e adereços menores. Varie alturas para criar profundidade e movimento visual.',
  },
  {
    title: 'Finalize com Balões',
    desc: 'Os balões são os últimos a ir. Agrupe por cores e alturas. Dica: use fita dupla-face para fixar sem machucar a parede.',
  },
];

const TIPS = [
  {
    icon: '📅',
    title: 'Reserve com antecedência',
    text: 'Datas de festas populares (sábados, feriados, meses de aniversário) esgotam com até 2 meses de antecedência. Reserve cedo!',
  },
  {
    icon: '📐',
    title: 'Tire medidas do espaço',
    text: 'Antes de montar, meça a largura e altura da parede onde ficará o backdrop. Isso evita surpresas e garante proporção perfeita.',
  },
  {
    icon: '👯',
    title: 'Chame uma amiga para ajudar',
    text: 'Com duas pessoas, a montagem fica até 3x mais rápida. Uma segura, a outra posiciona. Dez mãos são melhores que duas!',
  },
  {
    icon: '📸',
    title: 'Fotografe antes dos convidados',
    text: 'Reserve 15 minutos antes da festa para fotos da decoração completa. Depois fica difícil capturar sem pessoas na frente.',
  },
  {
    icon: '📦',
    title: 'Devolva organizado',
    text: 'Ao reembalar, use os mesmos sacos e etiquetas originais. Isso evita cobranças por peças faltando e agiliza a próxima locação.',
  },
];

export function GuidePDF() {
  return (
    <Document title="Guia de Planejamento de Festas — Mamãe Decora Atibaia" author="Mamãe Decora Atibaia">
      {/* Page 1: Cover */}
      <Page size="A4" style={s.page}>
        <View style={s.coverHeader}>
          <Text style={s.coverTag}>Mamãe Decora Atibaia · Pegue e Monte</Text>
          <Text style={s.coverTitle}>GUIA DE{'\n'}PLANEJAMENTO</Text>
          <Text style={s.coverSubtitle}>de Festas Infantis</Text>
        </View>
        <View style={s.coverBody}>
          <Text style={s.coverTagline}>
            Tudo o que você precisa saber para organizar a festa dos sonhos do seu filho
            usando o sistema Pegue e Monte — sem stress, sem improviso.
          </Text>
          <View style={s.coverHighlight}>
            <Text style={s.coverHighlightText}>
              {'✓  '}Checklist completo por período{'\n'}
              {'✓  '}Passo a passo de montagem{'\n'}
              {'✓  '}5 dicas de ouro das mães experientes{'\n'}
              {'✓  '}Cupom exclusivo de 10% OFF
            </Text>
          </View>
          <Text style={{ fontSize: 11, color: GRAY, lineHeight: 1.6, marginBottom: 16 }}>
            O sistema Pegue e Monte da Mamãe Decora funciona assim: você escolhe
            o tema, reserva o kit, nós entregamos tudo embalado e limpo na sua casa
            e você monta seguindo o guia incluso. Simples assim.
          </Text>
          <View style={s.coverFooter}>
            <Text style={s.coverFooterText}>
              {SITE_HOSTNAME}  ·  WhatsApp (11) 97733-6703  ·  Atibaia - SP
            </Text>
          </View>
        </View>
      </Page>

      {/* Page 2: Checklist */}
      <Page size="A4" style={s.contentPage}>
        <View style={s.pageHeader}>
          <View style={s.pageNum}><Text style={s.pageNumText}>2</Text></View>
          <View>
            <Text style={s.pageTitle}>Checklist por Período</Text>
            <Text style={s.pageSubtitle}>Do primeiro passo até o dia da festa</Text>
          </View>
        </View>
        <View style={s.content}>
          {CHECKLIST.map((group) => (
            <View key={group.period} style={s.timelineGroup}>
              <Text style={s.timelineLabel}>{group.period}</Text>
              {group.items.map((item, i) => (
                <View key={i} style={s.timelineItem}>
                  <View style={s.timelineDot} />
                  <Text style={s.timelineText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
          <View style={{ backgroundColor: DARK3, borderRadius: 8, padding: 16, marginTop: 8 }}>
            <Text style={{ fontSize: 11, color: WHITE, fontFamily: 'Helvetica-Bold', marginBottom: 6 }}>
              Dica de Ouro
            </Text>
            <Text style={{ fontSize: 10, color: GRAY, lineHeight: 1.6 }}>
              Reserve o kit com pelo menos 30 dias de antecedência, especialmente para
              sábados, feriados e períodos de alta demanda.
            </Text>
          </View>
        </View>
      </Page>

      {/* Page 3: Montagem */}
      <Page size="A4" style={s.contentPage}>
        <View style={s.pageHeader}>
          <View style={s.pageNum}><Text style={s.pageNumText}>3</Text></View>
          <View>
            <Text style={s.pageTitle}>Passo a Passo de Montagem</Text>
            <Text style={s.pageSubtitle}>Do recebimento do kit até a festa pronta</Text>
          </View>
        </View>
        <View style={s.content}>
          {STEPS.map((step, i) => (
            <View key={i} style={s.stepCard}>
              <View style={s.stepNum}><Text style={s.stepNumText}>{i + 1}</Text></View>
              <View style={s.stepContent}>
                <Text style={s.stepTitle}>{step.title}</Text>
                <Text style={s.stepDesc}>{step.desc}</Text>
              </View>
            </View>
          ))}
          <View style={{ backgroundColor: DARK3, borderRadius: 8, padding: 14, marginTop: 4, flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 18 }}>💡</Text>
            <Text style={{ fontSize: 10, color: GRAY, lineHeight: 1.5, flex: 1 }}>
              Todos os kits Mamãe Decora incluem um guia de montagem visual impresso.
              Siga a ordem indicada nele — foi testada para garantir o melhor resultado
              e economia de tempo.
            </Text>
          </View>
        </View>
      </Page>

      {/* Page 4: Tips */}
      <Page size="A4" style={s.contentPage}>
        <View style={s.pageHeader}>
          <View style={s.pageNum}><Text style={s.pageNumText}>4</Text></View>
          <View>
            <Text style={s.pageTitle}>5 Dicas de Ouro</Text>
            <Text style={s.pageSubtitle}>Segredos das mães que já fizeram a festa perfeita</Text>
          </View>
        </View>
        <View style={s.content}>
          {TIPS.map((tip, i) => (
            <View key={i} style={s.tipCard}>
              <View style={s.tipIcon}><Text style={s.tipIconText}>{tip.icon}</Text></View>
              <View style={s.tipContent}>
                <Text style={s.tipTitle}>{tip.title}</Text>
                <Text style={s.tipText}>{tip.text}</Text>
              </View>
            </View>
          ))}
          <View style={{ marginTop: 12, padding: 14, backgroundColor: DARK2, borderRadius: 8, borderLeft: '3px solid ' + PINK }}>
            <Text style={{ fontSize: 10, color: GRAY_LIGHT, lineHeight: 1.6, fontFamily: 'Helvetica-Bold' }}>
              "A festa perfeita não precisa ser cara — precisa ser planejada."
            </Text>
            <Text style={{ fontSize: 9, color: GRAY, marginTop: 6 }}>
              — Ana, Mamãe Decora Atibaia
            </Text>
          </View>
        </View>
      </Page>

      {/* Page 5: Coupon */}
      <Page size="A4" style={[s.contentPage, { justifyContent: 'center', alignItems: 'center' }]}>
        <View style={s.couponBody}>
          <Text style={s.couponTag}>Presente Exclusivo para Você</Text>
          <Text style={s.couponH1}>10% OFF{'\n'}na sua primeira locação</Text>
          <Text style={s.couponDesc}>
            Apresente este cupom no WhatsApp ao fazer{'\n'}seu orçamento e garanta seu desconto.
          </Text>
          <View style={s.couponBox}>
            <Text style={s.couponBoxLabel}>Seu cupom exclusivo</Text>
            <Text style={s.couponCode}>MAMAEDECORA10</Text>
            <Text style={s.couponBoxNote}>
              Válido para a sua primeira locação.{'\n'}
              Apresente no WhatsApp ao confirmar o pedido.{'\n'}
              Não cumulativo com outras promoções.
            </Text>
          </View>
          <View style={s.couponContact}>
            <View style={s.couponContactItem}>
              <Text style={s.couponContactLabel}>WhatsApp</Text>
              <Text style={s.couponContactValue}>(11) 97733-6703</Text>
            </View>
            <View style={[s.couponContactItem, { borderLeft: '1px solid ' + DARK3, paddingLeft: 20 }]}>
              <Text style={s.couponContactLabel}>Instagram</Text>
              <Text style={s.couponContactValue}>@ana4849</Text>
            </View>
            <View style={[s.couponContactItem, { borderLeft: '1px solid ' + DARK3, paddingLeft: 20 }]}>
              <Text style={s.couponContactLabel}>Cidade</Text>
              <Text style={s.couponContactValue}>Atibaia - SP</Text>
            </View>
          </View>
          <Text style={s.couponFooter}>
            {SITE_HOSTNAME}{'\n'}
            Jardim Cerejeiras, Atibaia - SP{'\n'}
            {'★★★★★'}  Locação de decoração infantil · Sistema Pegue e Monte
          </Text>
        </View>
      </Page>
    </Document>
  );
}
