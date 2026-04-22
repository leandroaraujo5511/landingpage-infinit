import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const style = delayMs ? ({ animationDelay: `${delayMs}ms` } as const) : undefined
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
