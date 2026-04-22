import { whatsappLink } from '../constants'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Olá! Vim pelo site da Infinit Tech e gostaria de mais informações.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon className="wa-float__icon" size={30} />
    </a>
  )
}
