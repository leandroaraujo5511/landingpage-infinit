import { Reveal } from './Reveal'

export function CtaSection() {
  return (
    <section className="section cta-band" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-band__inner">
            <h2 id="cta-title" className="cta-band__title">
              Vamos desenvolver a solução ideal para sua empresa?
            </h2>
            <a className="btn btn--primary btn--lg" href="#contato">
              Solicitar proposta
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
