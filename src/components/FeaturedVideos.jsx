'use client'

export default function FeaturedVideos() {
  const videos = [
    {
      title: 'CRM Impressoras',
      description: 'Desenvolvi um dashboard completo em C# para extração e análise de dados de impressoras 3D, aplicando os principais componentes do ecossistema .NET. O projeto foi estruturado utilizando models bem definidos, criação de APIs REST, integração com banco de dados PostgreSQL, gerenciamento via pgAdmin e documentação das rotas com Swagger.A aplicação realiza a integração com APIs das impressoras para coleta automática de informações operacionais, processando esses dados de forma analítica e apresentando-os em um dashboard para acompanhamento e tomada de decisão.',
      src: '/videos/dashup.mp4',
    },
    {
      title: 'Automação IA',
      description: 'Projeto de Machine Learning desenvolvido em Python com foco em identificação de pessoas. O sistema utiliza técnicas de visão computacional e aprendizado supervisionado para reconhecer e diferenciar indivíduos a partir de imagens ou vídeos. Foram aplicados processos de pré-processamento, extração de características e treinamento de modelo, permitindo que a aplicação realizasse a detecção e o reconhecimento facial de forma eficiente.',
      src: '/videos/Learing.mp4',
    },
    { 
      title: '🚀 ERP Dashboard completo — UX/UI Design',
      description: 'Projeto desenvolvido no Figma com foco em usabilidade, visualização de dados e experiência do usuário para gestão de impressão 3D.',
      src: '/videos/dashfigma.mp4',
    },
    { 
      title: 'Site de Gerenciamento para Impressoras 3D — UX/UI Design',
      description: 'Projeto desenvolvido no Figma com foco na criação de uma interface moderna e intuitiva para monitoramento e gerenciamento de impressoras 3D.',
      src: '/videos/site3d.mp4',
    }
  ]

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 mt-2">
            Alguns vídeos demonstrando meus trabalhos
          </p>
        </div>

        {/* Grid Responsivo */}
        <div className="
          grid 
          gap-6
        ">
          {videos.map((video, index) => (
            <div
              key={index}
              className="
                bg-zinc-900 
                rounded-2xl 
                overflow-hidden 
                shadow-lg 
                hover:scale-[1.02] 
                transition
              "
            >
              {/* Video */}
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  muted
                  controls
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              {/* Info */}
              <div className="p-4 bg-gradient-to-br from-red-700 via-fuchsia-900 to-blue-950 border-collapse">
                <h3 className="font-semibold text-lg text-white">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-200 mt-1">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
