import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from "lucide-react";
export default function FolderArkady() {
  const packages = [
    {
  title: "Plano MEI Crescimento",
  price: "R$ 149,90",
  description:
    "Estrutura contábil e digital para MEIs que desejam crescer com organização, previsibilidade e apoio estratégico.",
  items: [
    "Abertura e regularização MEI",
    "Emissão e suporte fiscal",
    "Organização financeira inicial",
    "Estrutura digital profissional",
    "Orientação para crescimento",
    "Planejamento para migração ME → EPP",
    "Acompanhamento operacional",
  ],
},
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
              Empresas de qualquer porte, frequentemente enfrentam desafios relacionados à
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
              className={`
  relative rounded-3xl
  border
  p-8
  transition-all duration-300
  hover:scale-[1.02]

  ${
    index === 3
      ? `
        lg:col-span-3
        max-w-4xl
        mx-auto
        w-full
        border-cyan-400/40
        bg-gradient-to-br from-zinc-900 via-black to-cyan-950/30
        shadow-[0_0_50px_rgba(34,211,238,0.15)]
      `
      : `
        border-cyan-500/20
        bg-gradient-to-b from-zinc-900 to-black
        shadow-2xl
      `
  }
`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 rounded-t-3xl" />
{index === 3 && (
  <div className="absolute top-6 right-6">
    <span className="
      px-4 py-2
      rounded-full
      bg-cyan-400/10
      border border-cyan-400/30
      text-cyan-300
      text-sm
      font-semibold
      tracking-wide
      backdrop-blur-sm
    ">
      Estrutura Completa
    </span>
  </div>
)}
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
              {index === 3 && (
  <div className="mt-8 flex justify-center">
    <a
      href="https://wa.me/5511930374865"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center gap-2
        w-full sm:w-auto
        max-w-xs
        px-5 py-3
        rounded-2xl
        bg-blue-500 hover:bg-blue-400
        text-white
        font-semibold
        text-sm sm:text-base
        text-center
        transition-all duration-300
        hover:scale-105
        shadow-[0_0_30px_rgba(34,211,238,0.25)]
      "
    >
      <MessageCircle
        size={18}
        className="text-white shrink-0"
      />

      <span className="leading-tight">
        Solicitar Estrutura Completa
      </span>
    </a>
  </div>
)}
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

  <div  className="mt-8 space-y-4 flex flex-col items-center text-gray-300">

   <p className="flex items-center gap-2">
  <Phone
    size={18}
    className="text-cyan-400"
  />

  <span>(11) 93037-4865</span>
</p>

    <a
  href="mailto:comercial@arkady.com.br"
  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
>
  <Mail
    size={18}
    className="text-cyan-400"
  />

  <span>comercial@arkady.com.br</span>
</a>
   <a
  href="https://arkady.com.br"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
>
  <Globe
    size={18}
    className="text-cyan-400"
  />

  <span>arkady.com.br</span>
</a>

  </div>

  <div className="mt-6 flex flex-col items-center gap-5">

  <a
    href="https://wa.me/5511959992286"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center gap-3
      px-6 py-3
      rounded-2xl
      bg-green-500 hover:bg-green-400
      text-white font-bold text-lg
      transition-all duration-300
      hover:scale-105
      shadow-lg hover:shadow-green-500/40
    "
  >
    <MessageCircle
  size={22}
  className="text-white"
/>

    Falar com Renato Vitorino
  </a>

   <a
    href="https://wa.me/5511930374865"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center gap-3
     px-6 py-3
      rounded-2xl
      bg-green-500 hover:bg-green-400
      text-white font-bold text-lg
      transition-all duration-300
      hover:scale-105
      shadow-lg hover:shadow-green-500/40
    "
  >
      <MessageCircle
  size={22}
  className="text-white"
/>

  Falar com Andre Costa
</a>

</div>

</footer>

</div>
)
}
