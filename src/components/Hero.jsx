'use client'
import Image from 'next/image'
import { arrowLeftIcon, downloadIcon, heroIcons } from '@/assets'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
    setMouseMove(true)
  }

  const { innerWidth, innerHeight } = windowOffset

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s',
            }}
          >
            <Image
              src={'/circulo.png'}
              alt="Person Image"
              width={800}
              height={800}
              priority={true}
              className="h-auto w-[350px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            Meu nome é Lucas Fernandes
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            <span>Desenvolvedor Full Stack | Designer UX/UI 🚀 </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl border-2 border-collapse border-green-500 bg-gradient-to-br from-yellow-700 via-fuchsia-900 to-rose-700 rounded-2xl py-2 w-70 text-white sm:text-2xl"
        >
          {heroIcons.map((item, i) => {
            const Icon = item.icon

            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg text-4xl sm:text-3xl hover:bg-lime-500 hover:text-white transition-colors"
              >
                <Icon />
              </a>
            )
          })}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          className="mx-auto mt-3 block w-max rounded-lg bg-lime-600 px-3 py-2 font-light capitalize tracking-wider text-white hover:bg-lime-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Entre em contato comigo!📲
        </motion.a>
      </div>
    </div>
  )
}

export default Hero
