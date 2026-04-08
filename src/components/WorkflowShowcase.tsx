import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faComments, faListTree, faPlay } from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/* ────────────────────────────────────────────
   Workflow showcase — explains the GSD flow
   with a stylised step visualisation and an
   abstract mockup of the workflow UI.
   ──────────────────────────────────────────── */

const steps: { icon: IconDefinition; label: string; title: string; detail: string }[] = [
  {
    icon: faPenToSquare,
    label: '01',
    title: 'Define',
    detail: 'Name your goal and paste an existing plan — or start from scratch.',
  },
  {
    icon: faComments,
    label: '02',
    title: 'Discuss',
    detail: 'AI surfaces 3–5 targeted questions that expose scope gaps before you write a line of code.',
  },
  {
    icon: faListTree,
    label: '03',
    title: 'Structure',
    detail: 'Answers become a phased roadmap — each phase linked to kanban cards and design notes.',
  },
  {
    icon: faPlay,
    label: '04',
    title: 'Execute',
    detail: 'Work the phases. Agents read the plan, pick up context, and ship.',
  },
]

function WorkflowMockup() {
  return (
    <div className="rounded-xl border border-border bg-bg-raised overflow-hidden shadow-lg shadow-indigo-glow/10">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] text-text-muted/50 font-mono">Workflows</span>
      </div>

      <div className="flex">
        {/* Workflow sidebar */}
        <div className="w-48 shrink-0 border-r border-white/[0.04] bg-bg/30 p-3 hidden md:block">
          {[
            { name: 'Auth rewrite', status: 'bg-[#28c840]', progress: '5/5' },
            { name: 'MCP skills', status: 'bg-indigo', progress: '3/7' },
            { name: 'Onboarding flow', status: 'bg-peach', progress: '0/4' },
          ].map((wf, i) => (
            <div
              key={wf.name}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 mb-1 ${
                i === 1 ? 'bg-indigo/10 border border-indigo/15' : 'border border-transparent'
              }`}
            >
              <div className={`w-2 h-2 rounded-full shrink-0 ${wf.status}`} />
              <span
                className={`text-[10px] font-medium truncate ${
                  i === 1 ? 'text-cream/70' : 'text-text-muted/40'
                }`}
              >
                {wf.name}
              </span>
              <span className="text-[8px] text-text-muted/25 ml-auto shrink-0">{wf.progress}</span>
            </div>
          ))}
        </div>

        {/* Phase list */}
        <div className="flex-1 p-4 space-y-2">
          {/* Workflow header */}
          <div className="mb-4">
            <div className="h-2.5 w-32 rounded bg-cream/15 mb-2" />
            <div className="h-2 w-56 rounded bg-text-muted/10" />
          </div>

          {/* Phases */}
          {[
            { title: 'Add workflow database tables', status: 'complete' as const },
            { title: 'Build GSD discussion engine', status: 'complete' as const },
            { title: 'Implement phase generation', status: 'active' as const },
            { title: 'Wire up kanban linking', status: 'pending' as const },
            { title: 'Add drag-to-reorder phases', status: 'pending' as const },
          ].map((phase, i) => (
            <motion.div
              key={phase.title}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
                phase.status === 'active'
                  ? 'border-indigo/30 bg-indigo/[0.06]'
                  : 'border-white/[0.04] bg-bg/40'
              }`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <div
                className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold ${
                  phase.status === 'complete'
                    ? 'bg-[#28c840]/20 text-[#28c840]'
                    : phase.status === 'active'
                      ? 'bg-indigo/20 text-indigo-light'
                      : 'bg-text-muted/10 text-text-muted/30'
                }`}
              >
                {phase.status === 'complete' ? '✓' : i + 1}
              </div>
              <span
                className={`text-[11px] font-medium ${
                  phase.status === 'complete'
                    ? 'text-text-muted/40 line-through'
                    : phase.status === 'active'
                      ? 'text-cream/80'
                      : 'text-text-muted/40'
                }`}
              >
                {phase.title}
              </span>
              {phase.status === 'active' && (
                <span className="ml-auto text-[8px] font-mono text-indigo/60 bg-indigo/10 px-1.5 py-0.5 rounded">
                  IN PROGRESS
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkflowShowcase() {
  return (
    <AnimatedSection className="py-28 border-t border-border" id="workflows">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-4">
            WORKFLOWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight">
            From vague goal to phased roadmap in minutes
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Workflows turn "I want to build X" into structured phases — with AI surfacing
            the questions you'd forget to ask until week two.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: 4-step GSD flow */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="group flex gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Step number + icon */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-bg-card border border-border flex items-center justify-center text-indigo group-hover:border-indigo/40 transition-colors">
                    <FontAwesomeIcon icon={step.icon} className="w-5 h-5" />
                  </div>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-border" />
                  )}
                </div>

                {/* Text */}
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-text-muted/40">{step.label}</span>
                    <h3 className="text-cream font-heading font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: stylised workflow mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <WorkflowMockup />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
