import { Reveal } from './Reveal'

const items = [
  'Atendimento personalizado',
  'Projetos sob medida',
  'Tecnologia moderna e escalável',
  'Suporte contínuo',
  'Experiência em soluções públicas e privadas',
]

export function Differentials() {
  return (
    <section id="diferenciais" className="section differentials">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Confiança</p>
          <h2 className="section__title">Por que escolher a Infinit Tech?</h2>
        </Reveal>
        <ul className="diff__grid">
          {items.map((text, i) => (
            <li key={text}>
              <Reveal delayMs={i * 60}>
                <div className="diff__item">
                  <span className="diff__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 12l4 4 8-9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="diff__text">{text}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
