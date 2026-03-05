import { notFound } from 'next/navigation'
import { readFile } from 'fs/promises'
import { join } from 'path'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, Terminal, Settings, HelpCircle } from 'lucide-react'

interface DocsPageProps {
  params: {
    locale: string
  }
}

const docSections = [
  {
    title: 'Overview',
    description: 'Introduction to SkillOps and core concepts',
    icon: BookOpen,
    href: '#overview',
    file: 'overview.md'
  },
  {
    title: 'Installation',
    description: 'Get SkillOps up and running on your system',
    icon: BookOpen,
    href: '#installation',
    file: 'installation.md'
  },
  {
    title: 'Commands Reference',
    description: 'Complete guide to all SkillOps commands',
    icon: Terminal,
    href: '#commands',
    file: 'commands.md'
  },
  {
    title: 'Configuration',
    description: 'Configure SkillOps for your workflow',
    icon: Settings,
    href: '#configuration',
    file: 'configuration.md'
  },
  {
    title: 'Workflows',
    description: 'Real-world workflow examples and use cases',
    icon: BookOpen,
    href: '#workflows',
    file: 'workflows.md'
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: HelpCircle,
    href: '#troubleshooting',
    file: 'troubleshooting.md'
  }
]

async function getDocContent(locale: string, filename: string) {
  try {
    const filePath = join(process.cwd(), 'docs', locale, filename)
    const content = await readFile(filePath, 'utf8')
    return content
  } catch (error) {
    return null
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale } = params
  
  // Get all documentation content
  const overviewContent = await getDocContent(locale, 'overview.md')
  const installationContent = await getDocContent(locale, 'installation.md')
  const commandsContent = await getDocContent(locale, 'commands.md')
  const configurationContent = await getDocContent(locale, 'configuration.md')
  const workflowsContent = await getDocContent(locale, 'workflows.md')
  const troubleshootingContent = await getDocContent(locale, 'troubleshooting.md')

  if (!overviewContent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about SkillOps - from installation to advanced usage
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {docSections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {section.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          {overviewContent && (
            <div id="overview" className="mb-16">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 rounded-r-lg mb-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {overviewContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Installation Section */}
          {installationContent && (
            <div id="installation" className="mb-16">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 rounded-r-lg mb-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {installationContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Commands Section */}
          {commandsContent && (
            <div id="commands" className="mb-16">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 rounded-r-lg mb-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {commandsContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Configuration Section */}
          {configurationContent && (
            <div id="configuration" className="mb-16">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 rounded-r-lg mb-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {configurationContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Workflows Section */}
          {workflowsContent && (
            <div id="workflows" className="mb-16">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 rounded-r-lg mb-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {workflowsContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Troubleshooting Section */}
          {troubleshootingContent && (
            <div id="troubleshooting" className="mb-16">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>
                          {children}
                        </code>
                      )
                    },
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 rounded-r-lg mb-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {troubleshootingContent}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Quick Start Guide */}
          <div id="quickstart" className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Install SkillOps</h3>
                  <p className="text-gray-600">Download and install the CLI tool on your system</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Pull Your First Skill</h3>
                  <p className="text-gray-600">Use <code className="bg-white px-2 py-1 rounded">skillops pull</code> to download a skill repository</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Configure Your IDEs</h3>
                  <p className="text-gray-600">Run <code className="bg-white px-2 py-1 rounded">skillops agentic</code> to set up your project</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Start Managing Skills</h3>
                  <p className="text-gray-600">Use the interactive TUI to enable/disable skills across your IDEs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}