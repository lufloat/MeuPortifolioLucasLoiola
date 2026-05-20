'use client'
import { motion } from 'framer-motion'

const Project = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative w-[300px] h-[200px] rounded-2xl overflow-hidden border border-white/10 shadow-lg cursor-pointer"
    >
      {/* Mídia: vídeo ou imagem */}
      {data.video ? (
        <video
          src={data.url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <img
          src={data.url}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Overlay ao hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">

        {/* Nome do projeto */}
        {data.name && data.name.trim() !== '' && (
          <h3 className="text-white font-semibold text-sm mb-1 leading-tight">
            {data.name}
          </h3>
        )}

        {/* Descrição */}
        {data.desc && data.desc.trim() !== '' && (
          <p className="text-white/70 text-xs mb-2 line-clamp-3 leading-relaxed">
            {data.desc}
          </p>
        )}

        {/* Tags de tecnologia */}
        <div className="flex flex-wrap gap-1">
          {data.tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-700 via-fuchsia-900 to-rose-700 text-white border border-lime-500/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Project
