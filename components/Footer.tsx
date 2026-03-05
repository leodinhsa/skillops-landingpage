'use client'

import { useTranslations } from 'next-intl'
import { Github, Twitter, Heart, Coffee } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'en'

  const quickLinks = [
    { name: 'Documentation', href: `/${currentLocale}/docs` },
    { name: 'Installation', href: `/${currentLocale}/docs#installation` },
    { name: 'Commands', href: `/${currentLocale}/docs#commands` },
    { name: 'Examples', href: `/${currentLocale}/docs#examples` },
  ]

  const communityLinks = [
    { name: 'GitHub', href: 'https://github.com/leodinhsa/skillops', icon: Github },
    // { name: 'Twitter', href: 'https://twitter.com/skillops', icon: Twitter },
    { name: 'Discussions', href: 'https://github.com/leodinhsa/skillops/discussions' },
  ]

  const supportLinks = [
    { name: 'Issues', href: 'https://github.com/leodinhsa/skillops/issues' },
    { name: 'Feature Requests', href: 'https://github.com/leodinhsa/skillops/issues/new?template=feature_request.md' },
    { name: 'Bug Reports', href: 'https://github.com/leodinhsa/skillops/issues/new?template=bug_report.md' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href={`/${currentLocale}`} className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="SkillOps Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold gradient-text">SkillOps</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('description')}
            </p>
            
            {/* Donation Button */}
            <Link
              href="https://buymeacoffee.com/leodinhdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-200 transform hover:scale-105"
            >
              <Coffee className="w-4 h-4" />
              <span>{t('donate')}</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('community')}</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('support')}</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>{t('madeWith')}</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© 2026 SkillOps. All rights reserved.</span>
            <Link href={`/${currentLocale}/privacy`} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href={`/${currentLocale}/terms`} className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}