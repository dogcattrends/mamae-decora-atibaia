export default function Privacidade() {
  return (
    <main className="min-h-screen bg-[#050505] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-black mb-12">POLÍTICA DE <span className="text-pink-500">PRIVACIDADE</span></h1>
        <div className="space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Coleta de Dados</h2>
            <p>Coletamos seu nome e e-mail através do nosso formulário de guia de planejamento para fins de marketing e envio de orçamentos.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Uso das Informações</h2>
            <p>Seus dados são utilizados exclusivamente pela Mamãe Decora Atibaia para comunicação direta e não são compartilhados com terceiros.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Segurança</h2>
            <p>Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
