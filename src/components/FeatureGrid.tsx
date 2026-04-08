import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faArrowRightArrowLeft, faLightbulb, faGraduationCap, faCodePullRequest, faPlay, faMagnifyingGlass, faClipboardList, faMoon, faCircleCheck } from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const features: { title: string; description: string; icon: IconDefinition }[] = [
  {
    title: 'MCP Server',
    description: 'Live repo context — zero upfront injection, always current, write access included',
    icon: faServer,
  },
  {
    title: 'Agent Handoff',
    description: 'Drag a card, launch an agent',
    icon: faArrowRightArrowLeft,
  },
  {
    title: 'Idea Center',
    description: 'Brainstorm to task in one click',
    icon: faLightbulb,
  },
  {
    title: 'Auto-Learning',
    description: '5 triggers, zero manual effort',
    icon: faGraduationCap,
  },
  {
    title: 'PR Workflow',
    description: 'GitHub & Bitbucket without the browser',
    icon: faCodePullRequest,
  },
  {
    title: 'Agent Launcher',
    description: 'Claude, Codex, Gemini in one dropdown',
    icon: faPlay,
  },
  {
    title: 'Cmd+K',
    description: 'Everything, instantly',
    icon: faMagnifyingGlass,
  },
  {
    title: 'Agent Setup',
    description: 'One-click MCP config copy',
    icon: faClipboardList,
  },
  {
    title: 'Theme System',
    description: 'Dark, light, system — your call',
    icon: faMoon,
  },
  {
    title: 'Dogfooding',
    description: "We use it. That's the proof.",
    icon: faCircleCheck,
  },
]

export default function FeatureGrid() {
  return (
    <AnimatedSection className="py-28 bg-bg-raised border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight">
            10 power features
          </h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            Everything technical leads and small teams need to ship with AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group relative flex items-start gap-4 rounded-xl bg-bg border border-border p-5 hover:border-indigo/30 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="shrink-0 rounded-lg bg-indigo/10 p-2.5 text-indigo">
                <FontAwesomeIcon icon={f.icon} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-cream font-heading font-semibold mb-1">{f.title}</h3>
                <p className="text-text-muted text-sm">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
