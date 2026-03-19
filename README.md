<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6e8e7c54-8e9a-4ab4-a267-4ec6b73cdb78

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy note

- Antes de rodar o `vercel --prod`, confirme que `npm run build` completa sem erros (já está verde).
- Se o deploy antigo exibiu 404, o novo push + deploy substituirá o build atual; o domínio `https://mamae-decora-atibaia.vercel.app/` deve começar a renderizar a home após o `vercel --prod` concluir.
