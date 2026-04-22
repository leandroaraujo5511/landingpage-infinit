import { whatsappLink } from '../constants'

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Olá! Vim pelo site da Infinit Tech e gostaria de mais informações.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M26.6 5.4A15.9 15.9 0 003.5 26.2L2 30l3.9-1.5A15.9 15.9 0 1026.6 5.4zM16 3.2A12.8 12.8 0 0127.5 25l.3.5-1.6 1.6-.5-.3A12.8 12.8 0 013.2 16 12.8 12.8 0 0116 3.2zm7.4 9.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.5-.3.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.6c.2-.2.3-.4.5-.7.2-.3.1-.5 0-.7l-1.3-3.2c-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.4 4 1.6 4.3c.2.3 2.8 4.2 6.7 5.9 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.7-1.9.3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z"
        />
      </svg>
    </a>
  )
}
