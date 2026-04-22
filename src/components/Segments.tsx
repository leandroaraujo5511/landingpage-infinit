import { Reveal } from './Reveal'

const segments = ['Prefeituras', 'Câmaras municipais', 'Empresas privadas', 'Prestadores de serviço', 'Startups']

export function Segments() {
  return (
    <section id="segmentos" className="section segments">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Atuação</p>
          <h2 className="section__title">Atendemos</h2>
          <p className="section__lead">
            Experiência em contextos regulatórios e operacionais distintos, com comunicação clara e
            entregas previsíveis.
          </p>
        </Reveal>
        <ul className="segments__chips">
          {segments.map((label, i) => (
            <li key={label}>
              <Reveal delayMs={i * 50}>
                <span className="segment-chip">{label}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
