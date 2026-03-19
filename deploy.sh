#!/bin/bash

# Script de Deploy para Vercel
# Uso: ./deploy.sh

echo "🚀 Iniciando Deploy na Vercel..."

# Verificar se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
fi

# Build local para testes
echo "🔨 Fazendo build local..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build falhou. Verifique os erros acima."
    exit 1
fi

echo "✅ Build concluído com sucesso!"
echo ""
echo "📡 Fazendo deploy na Vercel..."
echo "Nota: Se for primeira vez, você será redirecionado para fazer login/criar conta."
echo ""

# Deploy
vercel --prod

echo ""
echo "✅ Deploy concluído!"
echo ""
echo "💡 Dicas:"
echo "- Sua aplicação estará disponível em poucos instantes"
echo "- Verifique a URL fornecida"
echo "- Para domínio customizado, use: vercel env"
