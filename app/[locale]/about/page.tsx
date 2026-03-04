import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { Github, Twitter, Coffee, Heart, Code, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const stats = [
    { label: 'GitHub Stars', value: '2.5K+', icon: Github },
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Skills Managed', value: '50K+', icon: Code },
    { label: 'IDEs Supported', value: '15+', icon: Zap },
  ]

  const team = [
    {
      name: 'Development Team',
      role: 'Core Contributors',
      description: 'Passionate developers building the future of AI agent skill management',
      avatar: '👥'
    }
  ]

  const timeline = [
    {
      date: '2024 Q1',
      title: 'Project Inception',
      description: 'Started as a solution to manage AI agent skills across multiple IDEs'
    },
    {
      date: '2024 Q2',
      title: 'First Release',
      description: 'Initial CLI with basic symlink management and TUI interface'
    },
    {
      date: '2024 Q3',
      title: 'Community Growth',
      description: 'Growing community of developers and skill contributors'
    },
    {
      date: '2024 Q4',
      title: 'Advanced Features',
      description: 'Rich TUI experience, multi-IDE support, and safety features'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About SkillOps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from the need to efficiently manage AI agent skills across multiple development environments
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SkillOps was created to solve a common problem faced by developers working with AI agents: 
                managing skills across multiple IDEs without the hassle of file duplication and manual synchronization.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that developer tools should be simple, efficient, and powerful. That's why we built 
                SkillOps with a symlink-first approach, ensuring your skills are centrally managed while being 
                accessible across all your favorite development environments.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/leodinhsa/skillops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </Link>
                <Link
                  href="https://buymeacoffee.com/leodinhdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <Coffee className="w-5 h-5" />
                  <span>Support Us</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why SkillOps?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>No file duplication</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Central skill management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Multi-IDE support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span>Rich interactive interface</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SkillOps by the Numbers</h2>
            <p className="text-lg text-gray-600">Growing community of developers who trust SkillOps</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">From idea to reality - the SkillOps story</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.date} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.date}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600">The people behind SkillOps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-12 text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Support SkillOps Development</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              SkillOps is free and open-source. If you find it useful, consider supporting our development 
              to help us continue improving and adding new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://buymeacoffee.com/leodinhdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <Coffee className="w-5 h-5" />
                <span>Buy us a coffee</span>
              </Link>
              <Link
                href="https://github.com/leodinhsa/skillops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                <Github className="w-5 h-5" />
                <span>Star on GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}