import { HeroVisual } from './HeroVisual'
import { Reveal } from './Reveal'
import { whatsappLink } from '../constants'

export function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal>
            <p className="eyebrow">Infinit Tech &amp; Consultoria</p>
            <h1 className="hero__title">Tecnologia que transforma ideias em soluções reais</h1>
            <p className="hero__subtitle">
              Desenvolvemos sistemas inteligentes, escaláveis e personalizados para empresas que querem
              evoluir com tecnologia.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#contato">
                Solicitar proposta
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappLink('Olá! Gostaria de falar com um especialista da Infinit Tech.')}
                target="_blank"
                rel="noreferrer"
              >
                Falar com especialista
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero__art" delayMs={120}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
