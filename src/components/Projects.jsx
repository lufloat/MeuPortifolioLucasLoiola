'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── dados ────────────────────────────────────────────────────────────────────

const videoProjects = [
  {
    id: 'v1',
    name: 'EstimServ – Sistema de Orçamentos Inteligente',
    desc: 'Sistema inteligente para geração de orçamentos em PDF, integrado com agenda e dashboard de gestão comercial. Fluxo completo para acompanhamento de orçamentos, aprovações e status em tempo real. Desenvolvido em React + C#/.NET + Supabase.',
    url: '/videos/estimserv.mp4',
    video: true,
    link: 'https://www.estimserv.com.br/login',
    tech: ['React', 'C#', '.NET', 'Supabase', 'UX'],
  },
  {
    id: 'v2',
    name: 'Site Dashboard completo para sites de Impressão 3D',
    desc: 'Dashboard completo com gestão de pedidos, produtos e clientes para e-commerce de impressão 3D.',
    url: '/projects/crm.png',
    video: false,
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'C#', '.NET'],
  },
]

const imageProjects = [
  {
    id: 'i1',
    name: 'EstimServ – Sistema de Orçamentos Inteligente',
    desc: 'Sistema inteligente para geração de orçamentos em PDF, integrado com agenda e dashboard de gestão comercial.',
    url: '/projects/FotoSistema.jpg',
    tech: ['React', 'C#', '.NET', 'UX', 'CSS'],
  },
  {
    id: 'i2',
    name: 'Design Layout Impressão 3D',
    desc: 'Identidade visual e layout para plataforma de impressão 3D.',
    url: '/projects/Vistoria.jpeg',
    tech: ['Figma', 'Photoshop', 'UX', 'Python', 'Django', 'CSS'],
  },
  {
    id: 'i3',
    name: 'ChatBot para Loja de Instrumentos',
    desc: 'Interface conversacional para loja de instrumentos musicais.',
    url: '/projects/bot.jpeg',
    tech: ['Figma', 'Photoshop', 'UX'],
  },
  {
    id: 'i4',
    name: 'Site Dashboard – Impressão 3D',
    desc: 'Dashboard completo para gerenciamento de pedidos e produtos.',
    url: '/projects/crm.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'C#', '.NET'],
  },
  { id: 'i5',  name: '', desc: '', url: '/projects/5.jpg',  tech: ['Design & Figma'] },
  { id: 'i6',  name: '', desc: '', url: '/projects/6.jpg',  tech: ['Design & Figma'] },
  { id: 'i7',  name: '', desc: '', url: '/projects/8.jpg',  tech: ['Design & Figma'] },
  { id: 'i8',  name: '', desc: '', url: '/projects/9.jpg',  tech: ['Design & Figma'] },
  { id: 'i9',  name: '', desc: '', url: '/projects/10.jpg', tech: ['Design & Figma'] },
  { id: 'i10', name: '', desc: '', url: '/projects/12.jpg', tech: ['Design & Figma'] },
  { id: 'i11', name: '', desc: '', url: '/projects/1.jpg',  tech: ['Design & Figma'] },
  { id: 'i12', name: '', desc: '', url: '/projects/13.jpg', tech: ['Design & Figma'] },
  { id: 'i13', name: '', desc: '', url: '/projects/15.jpg', tech: ['Design & Figma'] },
]

const filterButtons = [
  'All',
  'Design & Figma',
  'React',
  'CSS',
  'JavaScript',
  'Typescript',
  'TailwindCSS',
  'NextJS',
  'C#',
  '.NET',
  'Python',
  'Django',
  'UX',
]

// ─── helpers ──────────────────────────────────────────────────────────────────

const TechTag = ({ label }) => (
  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-700 via-fuchsia-900 to-rose-700 text-white border border-lime-500/50">
    {label}
  </span>
)

// ─── cards ────────────────────────────────────────────────────────────────────

const ImageCard = ({ data, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.35, delay: index * 0.04 }}
    className="group relative w-[300px] h-[200px] rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-pointer flex-shrink-0"
  >
    <img
      src={data.url}
      alt={data.name || 'projeto'}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      {data.name?.trim() && (
        <h3 className="text-white font-semibold text-sm mb-1 leading-tight">{data.name}</h3>
      )}
      {data.desc?.trim() && (
        <p className="text-white/70 text-xs mb-2 line-clamp-3 leading-relaxed">{data.desc}</p>
      )}
      <div className="flex flex-wrap gap-1">
        {data.tech.map((t, i) => <TechTag key={i} label={t} />)}
      </div>
    </div>
  </motion.div>
)

const VideoCard = ({ data, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer w-full"
  >
    <div className="relative w-full aspect-video bg-black">
      {data.video ? (
        <video
          src={data.url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={data.url}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      {data.video && (
        <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600/90 text-white tracking-widest uppercase">
          ▶ Vídeo
        </span>
      )}
    </div>
    <div className="p-5 bg-white/5 backdrop-blur-sm">
      <h3 className="text-white font-semibold text-base mb-1 leading-snug">{data.name}</h3>
      {data.desc?.trim() && (
        <p className="text-white/60 text-xs mb-3 leading-relaxed">{data.desc}</p>
      )}
      <div className="flex flex-wrap gap-1 mb-3">
        {data.tech.map((t, i) => <TechTag key={i} label={t} />)}
      </div>
      {data.link && (
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:text-lime-300 transition-colors duration-200 group/link"
        >
          <span>Acessar sistema</span>
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </div>
  </motion.div>
)

// ─── componente principal ─────────────────────────────────────────────────────

const TABS = [
  { key: 'images', label: 'Projetos em Imagens', emoji: '🖼️' },
  { key: 'videos', label: 'Projetos em Vídeo',   emoji: '🎬' },
]

export default function Projects() {
  const [activeTab, setActiveTab]       = useState('images')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredImages =
    activeFilter === 'All'
      ? imageProjects
      : imageProjects.filter(p => p.tech.includes(activeFilter))

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">

      {/* título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white text-center mb-8"
      >
        Projetos
      </motion.h2>

      {/* toggle vídeo / imagem */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-1 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setActiveFilter('All') }}
              className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.key ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-700 via-fuchsia-800 to-rose-700 border border-lime-500/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.emoji}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* filtros de tecnologia — só aparece na aba de imagens */}
      <AnimatePresence>
        {activeTab === 'images' && (
          <motion.div
            key="filters"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {filterButtons.map(btn => (
              <button
                key={btn}
                onClick={() => setActiveFilter(btn)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeFilter === btn
                    ? 'bg-gradient-to-r from-yellow-700 via-fuchsia-800 to-rose-700 border-lime-500/50 text-white'
                    : 'bg-transparent border-white/20 text-white/50 hover:text-white/80 hover:border-white/40'
                }`}
              >
                {btn}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* conteúdo */}
      <AnimatePresence mode="wait">

        {/* ── imagens ── */}
        {activeTab === 'images' && (
          <motion.div
            key="images"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <AnimatePresence>
              <div className="flex flex-wrap justify-center gap-5">
                {filteredImages.length > 0 ? (
                  filteredImages.map((p, i) => (
                    <ImageCard key={p.id} data={p} index={i} />
                  ))
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/40 text-sm py-12"
                  >
                    Nenhum projeto com essa tecnologia.
                  </motion.p>
                )}
              </div>
            </AnimatePresence>
          </motion.div>
        )}

        {/* ── vídeos ── */}
        {activeTab === 'videos' && (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoProjects.map((p, i) => (
                <VideoCard key={p.id} data={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  )
}
