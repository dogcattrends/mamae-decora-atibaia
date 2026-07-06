# RELATÓRIO DE CORREÇÕES

Data da revisão: 06/07/2026.

## Resultado do build

- Comando executado: `npm run build`.
- Resultado: sucesso com Next.js 15.5.14; compilação, validação de tipos e geração das 10 páginas concluídas.
- Aviso não impeditivo: o Next.js detectou outro `package-lock.json` em `C:\Users\byimp` e inferiu essa pasta como workspace root. Como o build passou e a solicitação restringe correções a erros impeditivos, nenhuma configuração extra foi adicionada.

## 1. Catálogo — tema Stitch

- `components/constants.ts`: o item entre “Cabaret” e “Hello Kitty” passou de “Dragon Ball Z” para “Stitch”; a imagem agora aponta para `/stitch.png`. O `alt` do card é derivado de `theme.name`, portanto também passou a ser “Stitch”. Não existe slug ou metadata individual para temas neste projeto.
- `public/dragon-ball-z.png` → `public/stitch.png`: o arquivo da imagem foi renomeado após conferência visual.
- `public/README.md`: a lista de imagens foi atualizada.
- Verificação de duplicidade: existe exatamente um tema chamado “Stitch”. O catálogo também contém “Stitch e Angel”, que é um tema distinto e usa outra imagem (`/stitch-e-angel.png`).

## 2. Urgência e datas

- `lib/date-copy.ts`: novo helper baseado em `Intl.DateTimeFormat`, locale `pt-BR` e fuso `America/Sao_Paulo` para obter mês atual, próximo mês e ano atual.
- `components/Hero.tsx`: remove o array local de meses e o ano fixo 2026. A copy agora é recalculada no cliente e atualizada a cada hora: “Últimas datas para [mês atual]” e “Reserve para [próximo mês] agora”.
- `lib/guide-pdf.tsx`: a recomendação fixa de “agosto, outubro e dezembro” foi substituída por uma orientação perene sobre sábados, feriados e períodos de alta demanda.
- Foram mantidos prazos perenes como “2 a 4 semanas”, “até 2 meses” e “30 dias”, pois são recomendações de antecedência e não datas vencidas.

## 3. Resend fora do sandbox

- `app/api/contact/route.ts`: API key, remetente e destinatário agora vêm de `RESEND_API_KEY`, `RESEND_FROM_EMAIL` e `RESEND_TO_EMAIL`. A rota retorna HTTP 503 se a configuração estiver incompleta.
- O remetente sandbox `onboarding@resend.dev` foi removido das duas mensagens.
- Links absolutos e identificação do domínio nos e-mails agora usam `NEXT_PUBLIC_SITE_URL` por meio de `lib/site-url.ts`.
- `.env.example`: documenta todas as variáveis novas.

### Configuração necessária no painel do Resend

1. Acesse **Resend → Domains → Add Domain** e cadastre um domínio que você controla. Não é possível verificar `vercel.app`, pois esse domínio pertence à Vercel.
2. Prefira um subdomínio de envio, por exemplo `envios.mamaedecoraatibaia.com.br`, para isolar a reputação dos e-mails.
3. No provedor de DNS, adicione exatamente os registros DKIM e SPF fornecidos pelo Resend. Adicione também o registro de retorno indicado pelo painel, se ele for apresentado.
4. Aguarde o status **Verified** no Resend.
5. Defina `RESEND_FROM_EMAIL` com um endereço do domínio verificado, por exemplo `contato@envios.mamaedecoraatibaia.com.br`.
6. Defina `RESEND_TO_EMAIL` com o endereço que deve receber os novos leads.
7. Cadastre as três variáveis do Resend no ambiente **Production** da Vercel e faça um novo deploy.
8. Envie um formulário real e confirme a entrega tanto para a empresa quanto para o lead.

## 4. Número do desenvolvedor

- `components/Footer.tsx`: o link “Desenvolvido por Arthur Ribeker” foi alterado de `5511968771362` para `5511980931247`.
- A busca global não encontrou nenhuma outra ocorrência do número antigo no projeto.

## 5. Números de prova social

Todos foram centralizados em `lib/stats.ts`, que contém o comentário solicitado:

`// ATUALIZAR COM NÚMEROS REAIS CONFIRMADOS PELO CLIENTE`

| Número encontrado | Alegação | Onde era usado |
| --- | --- | --- |
| `300+` / “mais de 300” | Temas exclusivos | `components/constants.ts` (cards e FAQ), `components/ThemesShowcase.tsx`, `components/HowItWorks.tsx`, `app/layout.tsx` e `app/not-found.tsx` |
| `2.000+` | Festas realizadas | `components/constants.ts`, exibido por `components/Stats.tsx` |
| `5` | Anos de história | `components/constants.ts`, exibido por `components/Stats.tsx` |
| `1.500+` | Clientes felizes | `components/constants.ts`, exibido por `components/Stats.tsx` |
| `+450` | Mães que baixaram o guia “este mês” | `components/LeadForm.tsx` |

Arquivos ajustados para consumir a fonte única: `components/Stats.tsx`, `components/LeadForm.tsx`, `components/ThemesShowcase.tsx`, `components/HowItWorks.tsx`, `components/constants.ts`, `app/layout.tsx` e `app/not-found.tsx`.

Valores de preço, desconto, quantidade de convidados, quantidade de dicas e prazos de reserva não foram classificados como prova social e permaneceram próximos de suas respectivas regras comerciais.

## 6. Depoimentos

- `lib/testimonials.ts`: nova fonte única de nomes, textos, tema, identificação visual e caminho de foto.
- `components/Testimonials.tsx`: passou a consumir a fonte única e já aceita uma imagem real; enquanto `image` for `null`, mostra as iniciais existentes.

Depoimentos atuais a validar/substituir:

1. **Patrícia Lima — Mãe do Theo — Tema Batizado:** “O kit Batizado estava impecável! Tudo muito limpo e bem embalado. A montagem foi super tranquila e o resultado final parecia decoração de buffet caro.” Foto atual: nenhuma; avatar gerado com as iniciais `PL`.
2. **Juliana Mendes — Mãe da Alice — Tema Frozen:** “Aluguei o tema Frozen e as crianças ficaram encantadas. A Ana é super atenciosa e me ajudou a escolher o kit certo para o tamanho da minha sala.” Foto atual: nenhuma; avatar gerado com as iniciais `JM`.
3. **Renata Souza — Mãe do Lucas — Tema Mundo Bita:** “Melhor custo-benefício de Atibaia. As peças são de muita qualidade e o sistema de pegue e monte facilita demais a vida de quem quer economizar.” Foto atual: nenhuma; avatar gerado com as iniciais `RS`.

O arquivo contém o comentário para substituir os três registros por depoimentos e fotos reais autorizados pela cliente.

## 7. GTM, GA4 e consentimento LGPD

- `components/AnalyticsConsent.tsx`: banner de consentimento e carregamento condicional das tags. Google Tag Manager, GA4 e Vercel Analytics só são montados após aceite. Os scripts Google usam `next/script` com estratégia `afterInteractive`.
- `lib/analytics.ts`: fonte única para a chave de consentimento e envio de eventos ao `dataLayer`.
- `app/layout.tsx`: instala o gerenciador de consentimento global e remove o carregamento incondicional do Vercel Analytics.
- `app/politica-de-privacidade/page.tsx`: documenta o uso consentido de Google Analytics, GTM e Vercel Analytics.

Eventos implementados:

| Evento no `dataLayer` | Disparo | Parâmetros principais |
| --- | --- | --- |
| `whatsapp_cta_click` | Clique em qualquer CTA `wa.me` do site | `section_origin` (`hero`, `navbar_desktop`, `navbar_mobile`, `floating_button`, `catalog_theme`, `calculator_result`, `broadcast`, `thank_you_page` ou `footer_developer`) |
| `form_orcamento_submit` | Envio confirmado dos formulários principal e compacto | `form_id` (`lead_guide` ou `mini_lead_capture`) |
| `guia_pdf_download` | Clique no download do PDF na página de obrigado | `section_origin: thank_you_page` |
| `calculadora_uso` | Após 600 ms sem nova mudança no seletor de convidados | `guest_count` e `recommended_kit` |

Arquivos com marcação/disparo de eventos: `components/Hero.tsx`, `components/Navbar.tsx`, `components/FloatingWhatsApp.tsx`, `components/ThemesShowcase.tsx`, `components/PartyCalculator.tsx`, `components/WhatsAppBroadcast.tsx`, `components/Footer.tsx`, `components/LeadForm.tsx`, `components/MiniLeadCapture.tsx` e `app/obrigado/page.tsx`.

No GTM, é necessário criar acionadores do tipo **Evento personalizado** para os quatro nomes acima e vinculá-los às tags/eventos desejados. Para evitar duplicidade de page view, não adicione outra tag base de GA4 no container se `NEXT_PUBLIC_GA4_ID` já estiver configurado no site.

## 8. Canonical, Open Graph e domínio

- `lib/site-url.ts`: nova fonte única para `NEXT_PUBLIC_SITE_URL`, com fallback atual para `https://mamae-decora-atibaia.vercel.app`.
- `app/layout.tsx`: `metadataBase`, canonical, Open Graph e JSON-LD usam a URL centralizada.
- `app/sitemap.ts` e `app/robots.ts`: usam a mesma URL.
- `app/api/contact/route.ts`: o link do guia e o domínio mostrado nos e-mails usam a mesma URL.
- `lib/guide-pdf.tsx`: o domínio impresso no PDF usa a mesma configuração.

Quando o domínio próprio estiver conectado e validado na Vercel, basta trocar `NEXT_PUBLIC_SITE_URL` e fazer redeploy.

## Variáveis de ambiente finais

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contato@seudominio.com.br
RESEND_TO_EMAIL=cliente@seudominio.com.br
NEXT_PUBLIC_SITE_URL=https://mamae-decora-atibaia.vercel.app
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

## Checklist do que depende do responsável pelo projeto

- [ ] Verificar um domínio ou subdomínio próprio no painel do Resend e publicar os registros DNS solicitados.
- [ ] Definir `RESEND_API_KEY`, `RESEND_FROM_EMAIL` e `RESEND_TO_EMAIL` no ambiente Production da Vercel.
- [ ] Informar os IDs reais em `NEXT_PUBLIC_GTM_ID` e `NEXT_PUBLIC_GA4_ID`.
- [ ] Publicar no GTM os acionadores/tags para os quatro eventos personalizados e testar no Preview/DebugView.
- [ ] Confirmar com a cliente os números `300+`, `2.000+`, `5`, `1.500+` e `+450` antes de mantê-los como prova social.
- [ ] Obter autorização e substituir os três depoimentos atuais por nomes, textos e fotos reais.
- [ ] Conectar o domínio próprio na Vercel, ajustar DNS e depois atualizar `NEXT_PUBLIC_SITE_URL`.
- [ ] Fazer novo deploy de produção após cadastrar todas as variáveis.

## Arquivos alterados

- `.env.example`
- `app/api/contact/route.ts`
- `app/layout.tsx`
- `app/not-found.tsx`
- `app/obrigado/page.tsx`
- `app/politica-de-privacidade/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `components/AnalyticsConsent.tsx` (novo)
- `components/FloatingWhatsApp.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/HowItWorks.tsx`
- `components/LeadForm.tsx`
- `components/MiniLeadCapture.tsx`
- `components/Navbar.tsx`
- `components/PartyCalculator.tsx`
- `components/Stats.tsx`
- `components/Testimonials.tsx`
- `components/ThemesShowcase.tsx`
- `components/WhatsAppBroadcast.tsx`
- `components/constants.ts`
- `lib/analytics.ts` (novo)
- `lib/date-copy.ts` (novo)
- `lib/guide-pdf.tsx`
- `lib/site-url.ts` (novo)
- `lib/stats.ts` (novo)
- `lib/testimonials.ts` (novo)
- `public/README.md`
- `public/dragon-ball-z.png` → `public/stitch.png`
- `RELATORIO-CORRECOES.md` (novo)
