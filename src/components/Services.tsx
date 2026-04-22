import { Reveal } from './Reveal'

type Service = {
  title: string
  description: string
  icon: 'code' | 'devices' | 'cloud' | 'consult' | 'link'
}

const services: Service[] = [
  {
    title: 'Desenvolvimento de Software',
    description: 'Criamos sistemas personalizados conforme a necessidade do seu negócio.',
    icon: 'code',
  },
  {
    title: 'Aplicações Web e Mobile',
    description: 'Plataformas modernas acessíveis de qualquer lugar.',
    icon: 'devices',
  },
  {
    title: 'Soluções em Nuvem',
    description: 'Infraestrutura segura e escalável.',
    icon: 'cloud',
  },
  {
    title: 'Consultoria em Tecnologia',
    description: 'Planejamento estratégico e transformação digital.',
    icon: 'consult',
  },
  {
    title: 'Integrações entre sistemas',
    description: 'Automatização de processos empresariais.',
    icon: 'link',
  },
]

function ServiceIcon({ name }: { name: Service['icon'] }) {
  const cls = 'service-icon'
  switch (name) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path
            d="M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 7l-3 10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'devices':
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <rect x="3" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 20h10M10 14v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="15" y="9" width="6" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path
            d="M7 18h10.5A3.5 3.5 0 0021 14.5a3.5 3.5 0 00-3.08-3.47A5 5 0 008.37 9.2 4 4 0 007 17z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'consult':
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path
            d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'link':
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path
            d="M10 13a5 5 0 007.07 0l1-1a5 5 0 00-7.07-7.07l-1.41 1.41M14 11a5 5 0 00-7.07 0l-1 1a5 5 0 007.07 7.07l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
  }
}

export function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">O que fazemos</p>
          <h2 className="section__title">Serviços</h2>
          <p className="section__lead">
            Da descoberta à operação: entregamos soluções completas com foco em resultado e evolução
            contínua.
          </p>
        </Reveal>
        <ul className="services__grid">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delayMs={i * 70}>
                <article className="service-card">
                  <div className="service-card__icon" aria-hidden="true">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
