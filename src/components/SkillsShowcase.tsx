import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartKanban,
  faStickyNote,
  faGraduationCap,
  faLightbulb,
  faMagnifyingGlass,
  faCodeBranch,
  faServer,
} from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/* ────────────────────────────────────────────
   Skills showcase — shows how DevFlow exposes
   structured slash-command skills to AI agents
   via MCP, with a stylised mockup of the
   agent setup panel.
   ──────────────────────────────────────────── */

const skills: { cmd: string; label: string; tools: number; icon: IconDefinition }[] = [
  { cmd: '/devflow:tasks', label: 'Tasks', tools: 9, icon: faChartKanban },
  { cmd: '/devflow:notes', label: 'Notes', tools: 6, icon: faStickyNote },
  { cmd: '/devflow:learning', label: 'Learning', tools: 3, icon: faGraduationCap },
  { cmd: '/devflow:ideas', label: 'Ideas', tools: 5, icon: faLightbulb },
  { cmd: '/devflow:search', label: 'Search', tools: 1, icon: faMagnifyingGlass },
  { cmd: '/devflow:git', label: 'Git', tools: 6, icon: faCodeBranch },
  { cmd: '/devflow:context', label: 'Context', tools: 4, icon: faServer },
]

function SkillsMockup() {
  return (
    <div className="rounded-xl border border-border bg-bg-raised overflow-hidden shadow-lg shadow-indigo-glow/10">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] text-text-muted/50 font-mono">Agent Setup</span>
      </div>

      <div className="p-5 space-y-3">
        {/* Section label */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-indigo/20" />
            <span className="text-[11px] font-medium text-cream/60">Available Skills</span>
          </div>
          <span className="text-[9px] text-text-muted/30 font-mono">
            {skills.reduce((a, s) => a + s.tools, 0)} tools
          </span>
        </div>

        {/* Skill rows */}
        {skills.map((skill, i) => (
          <motion.div
            key={skill.cmd}
            className="flex items-center gap-3 rounded-lg border border-white/[0.04] bg-bg/40 px-3 py-2.5 hover:border-indigo/20 transition-colors"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
          >
            <div className="w-7 h-7 rounded-md bg-indigo/10 flex items-center justify-center shrink-0">
              <FontAwesomeIcon icon={skill.icon} className="w-3.5 h-3.5 text-indigo/60" />
            </div>
            <span className="text-[11px] font-mono text-indigo-light/70">{skill.cmd}</span>
            <span className="ml-auto text-[9px] text-text-muted/25 font-mono">{skill.tools} tools</span>
          </motion.div>
        ))}

        {/* Copy button */}
        <div className="pt-2">
          <div className="rounded-lg bg-indigo/10 border border-indigo/20 px-4 py-2.5 text-center">
            <span className="text-[11px] font-medium text-indigo-light/60">
              Copy full skill reference
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SkillsShowcase() {
  return (
    <AnimatedSection className="py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-4">
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight">
            Your agents already know what to call
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            DevFlow packages every MCP tool into slash-command skills that agents discover
            automatically. No prompt engineering. No manual config. Just capabilities, ready to use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: explanation */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-cream font-heading font-semibold text-lg mb-2">
                  Zero-config agent setup
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Skills group related tools under a single slash command. When an agent connects
                  via MCP, it sees <code className="text-indigo-light/80 bg-indigo/10 px-1.5 py-0.5 rounded text-xs">/devflow:tasks</code> and
                  instantly knows how to create cards, move them across columns, and add notes —
                  without you writing a single system prompt.
                </p>
              </div>

              <div>
                <h3 className="text-cream font-heading font-semibold text-lg mb-2">
                  One copy, every agent
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Claude Code, Codex, Gemini, Windsurf — each gets the same skill reference.
                  Copy the config once, paste it into your agent's setup, done. When DevFlow
                  adds new tools, every agent sees them automatically.
                </p>
              </div>

              <div>
                <h3 className="text-cream font-heading font-semibold text-lg mb-2">
                  Not read-only — write access included
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Agents don't just query your project. They create tasks, log decisions to
                  the Learning Center, promote ideas to notes, and move kanban cards — all
                  through the same skill interface.
                </p>
              </div>
            </div>
          </div>

          {/* Right: stylised mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SkillsMockup />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
