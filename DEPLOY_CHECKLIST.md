# Mamãe Decora Atibaia - Deploy Checklist

## ✅ Commit Realizado
- Alterações de hidratação commitadas
- Mensagem: "fix: corrigir hydration mismatch de componentes"

## 📋 Próximos Passos para Deploy na Vercel

### 1. **Push para GitHub**
```bash
git remote add origin https://github.com/seu-usuario/mamae-decora-atibaia.git
git branch -M main
git push -u origin main
```

### 2. **Conectar à Vercel**
- Acesse https://vercel.com/new
- Clique em "Continue with GitHub"
- Selecione o repositório `mamae-decora-atibaia`
- Clique em "Import"

### 3. **Configurações do Projeto (Vercel)**
- **Framework Preset**: Next.js ✓ (detectado automaticamente)
- **Build Command**: `npm run build` ✓
- **Output Directory**: `.next` ✓
- **Install Command**: `npm install` ✓

### 4. **Variáveis de Ambiente (se necessário)**
Se usar APIs externas, adicionar em "Environment Variables":
- Deixar vazio por enquanto (projeto não tem .env necessário)

### 5. **Deploy**
- Clique em "Deploy"
- Aguarde ~5-10 minutos
- Sua URL será: `https://seu-projeto.vercel.app`

## 🔄 Deploys Automáticos
- Qualquer push para a branch `main` fará deploy automático
- Você receberá um link de preview para PRs

## 📊 Análise de Desempenho
Após deploy, verifique:
- Layout Shift (Core Web Vitals)
- Performance no Lighthouse
- Imagens otimizadas ✓

## ⚙️ Configuração Adicional (Opcional)
Para usar domínio customizado:
- Configurações → Domains
- Adicionar seu domínio
- Apontar DNS para Vercel
