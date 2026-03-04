'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, Github, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CTA() {
  const t = useTranslations('cta')
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'en'

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href={`/${currentLocale}/docs`}
              className="group bg-white text-primary-600 px-8 py-3 rounded-full font-semibold text-base hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t('getStarted')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="https://github.com/leodinhsa/skillops"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-base border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>{t('viewGithub')}</span>
            </Link>
          </div>

          {/* Stats or Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <span>•</span>
                <span>2.5K+ GitHub Stars</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>•</span>
                <span>10K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>•</span>
                <span>50K+ Skills Managed</span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-16"
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-gray-400 text-sm ml-4">Get Started in Seconds</span>
              </div>
              <div className="terminal-content">
                <div className="command-line">
                  <span className="prompt">$</span>
                  <span className="command">curl -L https://github.com/leodinhsa/skillops/releases/latest/download/skillops-darwin-amd64 -o skillops</span>
                </div>
                <div className="output">✅ Downloaded skillops successfully</div>
                
                <div className="command-line">
                  <span className="prompt">$</span>
                  <span className="command">chmod +x skillops && sudo mv skillops /usr/local/bin/</span>
                </div>
                <div className="output">✅ SkillOps installed successfully</div>
                
                <div className="command-line">
                  <span className="prompt">$</span>
                  <span className="command">skillops --help</span>
                </div>
                <div className="output">
                  SkillOps - AI Agent Skills Management CLI<br />
                  &nbsp;&nbsp;Ready to manage your skills like a pro!
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}