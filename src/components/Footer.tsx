import { COMPANY_CNPJ, COMPANY_LEGAL_NAME, CONTACT_EMAIL, SOCIAL, whatsappLink } from '../constants'

function SocialIcon({ name }: { name: 'in' | 'ig' | 'wa' }) {
  if (name === 'in') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <path
          fill="currentColor"
          d="M6.5 8.5h3V18h-3V8.5zM8 4.2A1.7 1.7 0 106.3 6 1.7 1.7 0 008 4.2zm6.4 4.3c1.6 0 2.8 1 2.8 3.2V18h-3v-4.8c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V18h-3s0-8.2 0-9h2.6v1.3h.1c.4-.7 1.2-1.6 2.7-1.6z"
        />
      </svg>
    )
  }
  if (name === 'ig') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <path
          fill="currentColor"
          d="M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5zm0 2a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3H8zm9.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M20.5 12.2c0 1.7-.4 3-1.2 4.1-.9 1.3-2.2 2-3.8 2.2-1.1.1-4.5.1-5.6 0-1.6-.2-2.9-.9-3.8-2.2-.8-1.1-1.2-2.4-1.2-4.1 0-1.8.4-3.1 1.3-4.2.9-1.2 2.2-1.9 3.7-2.1 1-.1 4.4-.1 5.5 0 1.6.2 2.9.9 3.8 2.1.9 1.1 1.3 2.4 1.3 4.2zM12 9.3a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm4.9-2.6a.6.6 0 10-1.2 0 .6.6 0 001.2 0z"
      />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">Infinit Tech &amp; Consultoria</p>
          <p className="footer__legal">{COMPANY_LEGAL_NAME}</p>
          <p className="footer__meta">
            CNPJ <span className="footer__mono">{COMPANY_CNPJ}</span>
          </p>
          <p className="footer__meta">Picos – PI</p>
          <p className="footer__meta">Atendimento em todo o Brasil</p>
        </div>
        <div>
          <p className="footer__label">Email</p>
          <a className="footer__link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
        <div>
          <p className="footer__label">Redes sociais</p>
          <ul className="footer__social">
            <li>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <SocialIcon name="in" />
              </a>
            </li>
            <li>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <SocialIcon name="ig" />
              </a>
            </li>
            <li>
              <a
                href={whatsappLink('Olá! Vim pelo site da Infinit Tech.')}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <SocialIcon name="wa" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {year} Infinit Tech &amp; Consultoria. CNPJ {COMPANY_CNPJ}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
