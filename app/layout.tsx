import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkillOps - AI Agent Skills Management CLI',
  description: 'Lightweight, high-performance Go CLI utility for managing AI agent skills using a symlink-first approach.',
  keywords: 'AI, CLI, Go, Agent Skills, Developer Tools, Symlink Management',
  authors: [{ name: 'SkillOps Team' }],
  openGraph: {
    title: 'SkillOps - AI Agent Skills Management CLI',
    description: 'Manage AI agent skills across multiple IDEs with ease',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}