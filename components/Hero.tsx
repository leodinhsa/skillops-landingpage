'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Download, BookOpen, Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations('hero')
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'en'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-100 via-primary-50 to-background-100 pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex justify-center"
          >
            <Image 
              src="/logo.png" 
              alt="SkillOps Logo" 
              width={120} 
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-300 text-primary-700 text-sm font-medium shadow-sm"
          >
            Lightweight Go CLI for AI Agent Skills
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="gradient-text">{t('title')}</span>
            <br />
            <span className="text-gray-800">{t('subtitle')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href={`/${currentLocale}/docs`}
              className="group bg-gradient-to-r from-primary-500 to-primary-400 text-white px-8 py-3 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t('getStarted')}</span>
            </Link>
            
            <Link
              href="https://github.com/leodinhsa/skillops"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-700 px-8 py-3 rounded-full font-semibold text-base border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </Link>
          </motion.div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="max-w-2xl mx-auto mt-16"
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-gray-400 text-sm ml-4">Terminal</span>
              </div>
              <div className="terminal-content">
                <div className="command-line">
                  <span className="prompt">$</span>
                  <span className="green-command font-semibold">skillops&nbsp;</span>
                  <span className="blue-command font-semibold">pull&nbsp;</span>
                  <span className="white-command">https://github.com/github/awesome-copilot -s aspire</span>
                </div>
                <div className="header-out-wrapper">
                  <span className="header-output font-semibold">PULLING SPECIFIC SKILL</span>
                </div>
                <div className="output"></div>
                <div className="output">
                  <span className="white-output">Source:&nbsp;</span>
                  <span>https://github.com/github/awesome-copilot</span>
                </div>
                <div className="output">
                  <span className="white-output">Skill:&nbsp;&nbsp;</span>
                  <span className="green-output font-semibold">aspire</span>
                </div>
                <div className="output">
                  <span className="green-output font-semibold">🚀 Successfully pulled.</span>
                </div>
                
                <div>
                  <br></br>
                </div>
                <div>
                  <br></br>
                </div>
                <div className="command-line">
                  <span className="prompt">$</span>
                  <span className="green-command font-semibold">skillops&nbsp;</span>
                  <span className="blue-command font-semibold">agentic manage&nbsp;</span>
                  <span className="white-command">antigravity</span>
                </div>
                <div className="header-out-wrapper">
                  <span className="header-output font-semibold">What would you like to do with 'antigravity'?</span>
                </div>
                <div className="output"></div>
                <div className="output">
                  &#62;&nbsp;&nbsp;
                  <span className="purple-output font-semibold">Manage Skills</span>
                </div>
                <div className="output">
                  <span className="white-output">&nbsp;&nbsp;&nbsp;Remove Agent from project</span>
                </div>
                <div>
                  <br></br>
                </div>
                <div className="output">
                  arrows: navigate • enter: select • q: quit 
                </div>
                
                <div>
                  <br></br>
                </div>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}