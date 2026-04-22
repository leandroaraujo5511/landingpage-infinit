import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement>(options?: {
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? '0px 0px -6% 0px',
      }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options?.threshold, options?.rootMargin])

  return { ref, visible }
}
