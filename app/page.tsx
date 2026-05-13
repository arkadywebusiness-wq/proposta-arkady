export default function FolderArkady() {
  const packages = [
    {
      title: 'Plano Essencial',
      price: 'R$ 449,90/mês',
      items: [
        'Escrita contábil',
        'Apuração de tributos',
        'Gestão de pró-labore',
        'Obrigações acessórias',
        'Atendimento consultivo',
        'Organização documental básica',
        'Comunicação digital centralizada'
      ]
    },
    {
      title: 'Plano Profissional',
      price: 'R$ 749,90/mês',
      setup: 'Implantação: R$ 1.600,00',
      items: [
        'Tudo do Plano Essencial',
        'Domínio profissional',
        'E-mails corporativos',
        'Estrutura Google Workspace',
        'Organização documental em nuvem',
        'Padronização operacional',
        'Suporte digital operacional'
      ]
    },
    {
      title: 'Estrutura Digital',
      price: 'R$ 1.390,00/mês',
      setup: 'Site institucional: R$ 3.500',
      items: [
        'Tudo do Plano Profissional',
        'Site institucional profissional',
        'Hospedagem',
        'Gestão técnica básica',
        'Página institucional integrada',
        'Estrutura digital padronizada',
        'Apoio à presença digital'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative overflow-hidden border-b border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col items-center text-center gap-6">
  <img
  src="https://arkady.com.br/wp-content/uploads/2026/03/logo-cartao.svg"
  alt="Arkady"
  className="w-64 mx-auto drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]"
/>

            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                ARKADY
              </h1>
              <p className="text-cyan-400 uppercase tracking-[0.3em] mt-2 text-sm md:text-base">
                Web Business
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Estrutura Contábil e Digital para MEI, ME e EPPs
              </h2>

              <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
                A Arkady atua de forma integrada entre contabilidade, organização operacional
                e estrutura digital, oferecendo mais previsibilidade, organização e controle
                para pequenas empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Quem é a Arkady
            </h3>

            <p className="text-zinc-300 leading-relaxed text-lg">
              A Arkady é uma empresa voltada à organização operacional, contábil e digital
              de pequenos negócios. Nosso objetivo é estruturar processos com mais clareza,
              previsibilidade e controle, integrando soluções contábeis e digitais de apoio
              à gestão.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Estrutura de Apoio Operacional
            </h3>

            <p className="text-zinc-300 leading-relaxed text-lg">
              Empresas de arquitetura frequentemente enfrentam desafios relacionados à
              organização documental, previsibilidade tributária e controle operacional.
              Pensando nisso, a Arkady busca oferecer uma estrutura evolutiva de apoio,
              respeitando o estágio atual de cada empresa.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Pacotes de Serviços
          </h2>
          <p className="text-zinc-400 mt-4 text-lg">
            Estrutura modular para acompanhar a evolução do negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-zinc-900 to-black p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 rounded-t-3xl" />

              <h3 className="text-3xl font-bold text-white mb-4">
                {pkg.title}
              </h3>

              <div className="text-4xl font-black text-cyan-400 mb-2">
                {pkg.price}
              </div>

              {pkg.setup && (
                <p className="text-sm text-zinc-400 mb-6">
                  {pkg.setup}
                </p>
              )}

              <ul className="space-y-4 mt-8">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Crescimento Estruturado
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl mx-auto">
            A proposta da Arkady é oferecer uma estrutura organizada, acessível e evolutiva,
            permitindo maior previsibilidade financeira, controle documental e suporte operacional
            sem complexidade desnecessária.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-black border border-cyan-500/20 text-cyan-400 font-semibold">
              Contabilidade
            </div>

            <div className="px-6 py-3 rounded-2xl bg-black border border-cyan-500/20 text-cyan-400 font-semibold">
              Workspace
            </div>

            <div className="px-6 py-3 rounded-2xl bg-black border border-cyan-500/20 text-cyan-400 font-semibold">
              Site Institucional
            </div>

            <div className="px-6 py-3 rounded-2xl bg-black border border-cyan-500/20 text-cyan-400 font-semibold">
              Estrutura Digital
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-16 text-center">

  <h3 className="text-2xl font-bold text-white">
    Arkady Web Business
  </h3>

  <p className="text-zinc-400 mt-3">
    Estrutura Operacional, Contábil e Digital
  </p>

  <div className="mt-8 space-y-3 text-zinc-300">

    <p>
      📞 (11) 93037-4865
    </p>

    <a
  href="mailto:comercial@arkady.com.br"
  className="text-cyan-400 hover:text-cyan-300 transition"
>
  ✉️ comercial@arkady.com.br
</a>

    <a
  href="https://arkady.com.br"
  target="_blank"
  className="text-cyan-400 hover:text-cyan-300 transition"
>
  🌐 arkady.com.br
</a>

  </div>

  <div className="flex justify-center py-10">
    <a
      href="https://wa.me/551195999-2286"
      target="_blank"
      className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
    >
      Renato Vitorino
    </a>
  </div>

</footer>
      <div className="flex justify-center py-10">
  <a
    href="https://wa.me/5511930374865"
    target="_blank"
    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
  >
    Falar com a Arkady
  </a>
</div>
    </div>
  )
}
