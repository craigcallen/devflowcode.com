import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faArrowRightArrowLeft, faLightbulb } from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const problems: { icon: IconDefinition; text: string; detail: string }[] = [
  {
    icon: faEyeSlash,
    text: 'Your AI agents start every session blind',
    detail: 'No memory of past decisions, tasks, or context — every conversation starts from zero.',
  },
  {
    icon: faArrowRightArrowLeft,
    text: 'Your context lives across 5 different tools',
    detail: 'Notes in Notion, tasks in Linear, docs in Confluence — none of it reaches your AI.',
  },
  {
    icon: faLightbulb,
    text: 'Your best decisions disappear after the PR merges',
    detail: 'Hard-won knowledge evaporates. Next sprint, you rediscover the same lessons.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function ProblemBar() {
  return (
    <AnimatedSection className="relative py-28 overflow-hidden border-t border-border">
      {/* Subtle red-tinted atmospheric glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-[#0e0a1a] to-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#EE005A]/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-violet/80 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
            The problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">
            Sound familiar?
          </h2>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative rounded-xl border border-violet/20 bg-gradient-to-b from-[#1a0a1e]/60 to-[#0e0618]/40 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-violet/40"
            >
              {/* Danger-zone icon badge */}
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-violet/10 border border-violet/20">
                <FontAwesomeIcon
                  icon={p.icon}
                  className="w-5 h-5 text-violet/80"
                />
              </div>

              <p className="text-cream font-heading text-lg font-semibold leading-snug mb-3">
                {p.text}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {p.detail}
              </p>

              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-violet/[0.06] rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
