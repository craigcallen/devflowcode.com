import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import AnimatedSection from './AnimatedSection'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  const animate = useCallback(() => {
    const duration = 1800
    let start: number | null = null
    function step(timestamp: number) {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeOutExpo(progress) * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target])

  useEffect(() => {
    if (isInView) animate()
  }, [isInView, animate])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 0, suffix: '', label: 'tokens injected by MCP server', animated: false, hero: true },
  { value: 54, suffix: '', label: 'tools agents can call on demand', animated: true, hero: false },
  { value: 5, label: 'auto-learning triggers', animated: false, hero: false },
  { value: '4+', label: 'AI agents supported', animated: false, hero: false },
]

export default function StatsBar() {
  return (
    <AnimatedSection className="py-20 bg-bg border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`relative rounded-xl p-6 sm:p-8 text-center overflow-hidden ${
                stat.hero
                  ? 'bg-bg-raised border border-indigo/30 shadow-lg shadow-indigo-glow/15'
                  : 'bg-bg-raised border border-border'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {stat.hero && (
                <div className="absolute inset-0 bg-gradient-to-b from-indigo/8 to-transparent pointer-events-none" />
              )}
              <div className={`relative font-heading font-bold mb-2 ${
                stat.hero
                  ? 'text-5xl sm:text-6xl text-indigo-light'
                  : 'text-4xl sm:text-5xl text-cream'
              }`}>
                {stat.animated ? (
                  <AnimatedCounter target={stat.value as number} suffix={stat.suffix} />
                ) : (
                  <>{stat.value}</>
                )}
              </div>
              <p className="relative text-text-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
