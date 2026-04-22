import { useEffect, useState } from 'react'
import { whatsappLink } from '../constants'

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#topo" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            <svg
              className="brand__infinity"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="brand__text">
            <span className="brand__name">Infinit Tech</span>
            <span className="brand__tag">&amp; Consultoria</span>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <nav id="site-nav" className={`site-nav ${open ? 'site-nav--open' : ''}`}>
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="site-nav__cta">
            <a className="btn btn--ghost btn--sm" href="#contato" onClick={() => setOpen(false)}>
              Solicitar proposta
            </a>
            <a
              className="btn btn--primary btn--sm"
              href={whatsappLink('Olá! Gostaria de falar com um especialista da Infinit Tech.')}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
