import { About } from './components/About'
import { Contact } from './components/Contact'
import { CtaSection } from './components/CtaSection'
import { Differentials } from './components/Differentials'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Segments } from './components/Segments'
import { Services } from './components/Services'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import './styles/landing.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Segments />
        <Process />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
