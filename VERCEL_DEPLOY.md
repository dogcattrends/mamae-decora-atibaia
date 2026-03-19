# 🚀 Mamãe Decora Atibaia - Deploy Guide

## 📦 Projeto
SPA moderna para agência de decoração de festas com temas "Pegue e Monte".

**Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS

---

## 🔄 Passo 1: Push para GitHub

Se ainda não tem repositório no GitHub:

### Opção A: SSH (Recomendado)
```bash
# Acessar diretório do projeto
cd "C:\Users\byimp\OneDrive\Documentos\GitHub\mamãe-decora-atibaia"

# Adicionar remote
git remote add origin git@github.com:seu-usuario/mamae-decora-atibaia.git

# Renomear branch
git branch -M main

# Push inicial
git push -u origin main
```

### Opção B: HTTPS
```bash
git remote add origin https://github.com/seu-usuario/mamae-decora-atibaia.git
git branch -M main
git push -u origin main
```

---

## 🎯 Passo 2: Deploy na Vercel

### Via Web (Mais Fácil)
1. Acesse https://vercel.com/new
2. Clique "Continue with GitHub"
3. Authorize Vercel
4. Selecione `mamae-decora-atibaia`
5. Clique "Import"
6. Configurações aparecem pré-preenchidas ✅
7. Clique "Deploy"

### Via CLI
```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## ⚙️ Variáveis de Ambiente

O projeto não requer variáveis obrigatórias, mas se precisar adicionar no futuro:

**Na Vercel Dashboard**:
1. Vá para Project Settings → Environment Variables
2. Adicione as variáveis
3. Redeploy

---

## 🎬 Configuração Automática

Vercel detecta automaticamente:
- ✅ Framework: Next.js
- ✅ Build command: `npm run build`
- ✅ Output: `.next`
- ✅ Install command: `npm install`

---

## 📊 Após Deploy

### URLs Importantes
- **Production**: `https://seu-projeto.vercel.app`
- **Dashboard**: `https://vercel.com/seu-usuario/mamae-decora-atibaia`
- **Team**: Convidar colaboradores em Team Settings

### Monitoramento
- Verifique Performance no Lighthouse
- Monitore Core Web Vitals
- Configure Analytics

### Domínio Customizado
1. Na Vercel Settings → Domains
2. Adicione `www.mamaedecoraatibaia.com.br`
3. Siga instruções de DNS
4. Espere 24-48h para propagação

---

## 🔄 Próximos Deploys

Depois do primeiro deploy:
- **Automático**: Qualquer push para `main` fará deploy automático
- **Preview**: Cada PR receberá uma URL de preview
- **Rollback**: Versões anteriores disponíveis no dashboard

---

## 🐛 Troubleshooting

### Build falha na Vercel
```bash
# Teste localmente
npm run clean
npm run build
```

### Imagens não carregam
- Verificar `next.config.ts` - remotePatterns estão configurados ✅

### Hidratação erros em produção
- Já foram corrigidos! ClientOnly wrapper foi adicionado 

---

## 💡 Dicas Finais

1. **Usar GitHub para versionamento** - não use upload manual
2. **Testar build localmente** antes de commitar
3. **Monitorar Vercel Analytics** para performance
4. **Configurar Sentry** se quiser error tracking
5. **Use environment-specific URLs** em produção

---

**Qualquer dúvida, consulte**: https://vercel.com/docs
