import { Reveal } from './Reveal'

function IconChip() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="about-icon">
      <path
        d="M7 8h10M7 12h6M7 16h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="about-icon">
      <path
        d="M12 3l8 3v7c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="about-icon">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <Reveal>
          <h2 className="section__title">Especialistas em soluções digitais sob medida</h2>
          <div className="about__text">
            <p>
              A Infinit Tech &amp; Consultoria nasce com o propósito de ajudar empresas e instituições a
              evoluírem através da tecnologia.
            </p>
            <p>
              Desenvolvemos sistemas modernos, seguros e escaláveis, sempre focados na necessidade real do
              cliente.
            </p>
            <p className="about__highlight">Atendemos empresas em todo o Brasil.</p>
          </div>
        </Reveal>
        <Reveal className="about__icons" delayMs={100}>
          <ul className="about__icon-list">
            <li>
              <span className="about__icon-card">
                <IconChip />
                <span>Engenharia de software</span>
              </span>
            </li>
            <li>
              <span className="about__icon-card">
                <IconShield />
                <span>Segurança e governança</span>
              </span>
            </li>
            <li>
              <span className="about__icon-card">
                <IconGlobe />
                <span>Presença nacional</span>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
