'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Download, Terminal, Play, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const installSteps = [
  {
    key: 'step1',
    icon: Download,
    command: 'brew tap leodinhsa/skillops',
    color: 'from-primary-500 to-primary-400'
  },
  {
    key: 'step2',
    icon: Terminal,
    command: 'brew install skillops',
    color: 'from-primary-400 to-primary-500'
  },
  {
    key: 'step3',
    icon: Play,
    command: 'skillops --help',
    color: 'from-primary-600 to-primary-500'
  }
]

export default function Installation() {
  const t = useTranslations('installation')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background-100 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Installation Steps */}
        <div className="max-w-4xl mx-auto">
          {installSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 mb-8 last:mb-0"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-base shadow-lg`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg text-gray-800 mb-2">
                    {index + 1}. {t(step.key)}
                  </h3>
                  
                  {/* Command Block */}
                  <div className="bg-gray-100 rounded-xl p-4 font-mono text-xs relative group border border-primary-500/20">
                    <div className="flex items-center justify-between">
                      <code className="text-primary-400 flex-1 pr-4">
                        $ {step.command}
                      </code>
                      <button
                        onClick={() => copyToClipboard(step.command, index)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-200 rounded-lg"
                        title="Copy command"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4 text-primary-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Alternative Installation Methods */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Alternative Installation Methods
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-xl">•</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-xs">brew install skillops</code>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">•</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-xs">wget https://github.com/leodinhsa/skillops/releases/latest/download/skillops-linux-amd64</code>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">•</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-xs">winget install skillops</code>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}