import { Reveal } from './Reveal'

const steps = [
  { title: 'Diagnóstico', desc: 'Entendimento profundo do cenário, processos e restrições.' },
  { title: 'Planejamento', desc: 'Arquitetura, prioridades, cronograma e indicadores de sucesso.' },
  { title: 'Desenvolvimento', desc: 'Construção iterativa com qualidade, testes e transparência.' },
  { title: 'Implantação', desc: 'Go-live seguro, migração e capacitação das equipes.' },
  { title: 'Suporte contínuo', desc: 'Evolução, monitoramento e melhorias após a entrega.' },
]

export function Process() {
  return (
    <section id="processo" className="section process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Metodologia</p>
          <h2 className="section__title">Como funciona nosso processo</h2>
        </Reveal>
        <ol className="timeline">
          {steps.map((step, i) => (
            <li key={step.title} className="timeline__item">
              <Reveal delayMs={i * 80}>
                <div className="timeline__card">
                  <span className="timeline__step" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="timeline__title">{step.title}</h3>
                    <p className="timeline__desc">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
