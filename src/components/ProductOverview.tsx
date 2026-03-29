import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartKanban, faServer, faGraduationCap, faLightbulb, faCodePullRequest, faRectangleTerminal } from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const surfaces: { title: string; label: string; description: string; icon: IconDefinition }[] = [
  {
    title: 'Work that moves itself',
    label: 'Kanban',
    description:
      'Drag a card to In Progress. Claude Code launches, reads the spec, and gets to work.',
    icon: faChartKanban,
  },
  {
    title: 'Agents that actually know your codebase',
    label: 'MCP Server',
    description:
      "DevFlow's local MCP server gives every AI agent live access to your tasks, notes, and repo context.",
    icon: faServer,
  },
  {
    title: 'Memory that builds itself',
    label: 'Learning Center',
    description:
      'Five automatic triggers write to your knowledge base — commits, PR merges, task completions, blockers, idle snapshots.',
    icon: faGraduationCap,
  },
  {
    title: 'Thinking that turns into work',
    label: 'Idea Center',
    description:
      'Brainstorm with an AI agent. Promote any message to a task, note, or learning entry with one click.',
    icon: faLightbulb,
  },
  {
    title: 'Code review without the browser',
    label: 'PR Workflow',
    description:
      'Review, approve, comment, and merge GitHub and Bitbucket PRs without leaving DevFlow.',
    icon: faCodePullRequest,
  },
  {
    title: 'Your agents, one click away',
    label: 'Terminal',
    description:
      'Launch Claude Code, Codex, or Gemini from the terminal tab bar. Sessions auto-detect which agent is running.',
    icon: faRectangleTerminal,
  },
]

export default function ProductOverview() {
  return (
    <AnimatedSection className="py-28" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-4">
            THE WORKSPACE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight">
            Six surfaces. One workspace.
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Everything your AI agents need to ship — without you explaining it again.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {surfaces.map((s, i) => (
            <motion.div
              key={i}
              className="group relative rounded-xl bg-bg-card border border-border p-6 hover:border-indigo/40 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-indigo">
                    <FontAwesomeIcon icon={s.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium font-mono text-text-muted uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
                <h3 className="text-cream font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
