import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Installation from '@/components/Installation'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Installation />
      {/* <CTA /> */}
      <Footer />
    </main>
  )
}