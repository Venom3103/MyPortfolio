'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative rounded-2xl shadow-md transition hover:shadow-lg"
      style={{ backgroundImage: 'var(--hero-pattern)' }}
    >
      <div className="md:flex md:items-center md:justify-between gap-12">
        {/* Left content */}
        <div className="max-w-2xl space-y-4 text-center md:text-left">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Hi, I’m <span className="text-primary">Ayush</span>
            <br />
            <span className="text-slate-200">FullStack MERN Developer</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-lg text-slate-300 max-w-xl leading-relaxed"
          >
            I design and build{' '}
            <span className="font-semibold text-white">
              clean, accessible interfaces
            </span>{' '}
            that delight users at every interaction. I’m passionate about
            crafting seamless experiences using{' '}
            <span className="text-primary font-medium">Next.js</span>,{' '}
            <span className="text-primary font-medium">React.js</span>,{' '}
            <span className="text-primary font-medium">TypeScript</span>, and{' '}
            <span className="text-primary font-medium">Excellence</span> that
            bring apps to life.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-red-450 text-white font-medium hover:scale-105 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-red-450 text-white font-medium hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right content container */}
        <div className="flex flex-col items-center md:items-end space-y-6 relative">
          {/* Cartoon image */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-[420px] h-[360px] pointer-events-none select-none"
          >
            <Image
              src="/MyCartoon.png"
              alt="Ayush Cartoon"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Right stats card */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-10 md:mt-0 w-full p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 shadow-md backdrop-blur-sm transition hover:shadow-lg"
          >
            <div className="text-sm uppercase tracking-wide text-slate-400">
              Quick Stats
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-semibold text-white">1+</div>
                <div className="text-xs text-slate-400">Years of Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-white">5+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-white">React</div>
                <div className="text-xs text-slate-400">Stack</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
