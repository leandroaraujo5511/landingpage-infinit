import { CONTACT_EMAIL, whatsappLink } from '../constants'
import { Reveal } from './Reveal'

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Contato — site Infinit Tech')}`

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact__inner">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="section__title">Fale com a Infinit Tech</h2>
          <p className="section__lead">
            Escolha o canal que for mais conveniente. Retornamos com próximos passos e uma proposta alinhada à
            sua realidade.
          </p>
          <div className="contact__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink('Olá! Gostaria de falar com um especialista da Infinit Tech.')}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
            <a className="btn btn--ghost" href={mailtoHref}>
              Enviar e-mail
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
