import { motion } from 'framer-motion'

/* ────────────────────────────────────────────
   Stylised app mockup — suggests the DevFlow
   workspace without revealing the actual UI.
   Pure CSS shapes, no screenshots.
   ──────────────────────────────────────────── */

const shimmer =
  'bg-gradient-to-r from-transparent via-white/[0.03] to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]'

function Bar({ w, color = 'bg-text-muted/15' }: { w: string; color?: string }) {
  return <div className={`h-2 rounded-full ${color} ${w}`} />
}

function KanbanCard({ delay }: { delay: number }) {
  return (
    <motion.div
      className="rounded-md bg-bg/60 border border-white/[0.04] p-2.5 space-y-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Bar w="w-4/5" />
      <Bar w="w-3/5" color="bg-text-muted/10" />
      <div className="flex items-center gap-1.5 pt-1">
        <div className="w-4 h-4 rounded-full bg-indigo/25" />
        <Bar w="w-10" color="bg-text-muted/8" />
      </div>
    </motion.div>
  )
}

function KanbanColumn({
  label,
  accent,
  cards,
  delay,
}: {
  label: string
  accent: string
  cards: number
  delay: number
}) {
  return (
    <div className="flex-1 min-w-0 space-y-2.5">
      <div className="flex items-center gap-2 px-1 mb-3">
        <div className={`w-2 h-2 rounded-full ${accent}`} />
        <span className="text-[10px] font-medium text-text-muted/60 uppercase tracking-wider truncate">
          {label}
        </span>
        <span className="text-[9px] text-text-muted/30 ml-auto">{cards}</span>
      </div>
      {Array.from({ length: cards }).map((_, i) => (
        <KanbanCard key={i} delay={delay + i * 0.08} />
      ))}
    </div>
  )
}

function TerminalLine({ prompt, text, delay }: { prompt: string; text: string; delay: number }) {
  return (
    <motion.div
      className="flex gap-2 text-[10px] font-mono leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="text-indigo/60 shrink-0">{prompt}</span>
      <span className="text-text-muted/50">{text}</span>
    </motion.div>
  )
}

export default function AppMockup() {
  return (
    <div className="relative rounded-t-xl border border-b-0 border-border bg-bg-raised overflow-hidden shadow-2xl shadow-indigo-glow/20">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-text-muted/50 font-mono">DevFlow</span>
      </div>

      {/* App body */}
      <div className="flex h-[340px] sm:h-[400px]">
        {/* Sidebar */}
        <div className="w-44 shrink-0 border-r border-white/[0.04] bg-bg/40 p-3 hidden sm:flex flex-col gap-1">
          {/* Repo selector */}
          <div className="flex items-center gap-2 rounded-md bg-white/[0.03] px-2.5 py-2 mb-3">
            <div className="w-5 h-5 rounded bg-indigo/20" />
            <Bar w="w-20" color="bg-text-muted/20" />
          </div>

          {/* Nav items */}
          {[
            { active: true, label: 'Kanban' },
            { active: false, label: 'Notes' },
            { active: false, label: 'Learning' },
            { active: false, label: 'Ideas' },
            { active: false, label: 'Workflows' },
            { active: false, label: 'PRs' },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 ${
                item.active
                  ? 'bg-indigo/10 border border-indigo/15'
                  : 'border border-transparent'
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded ${
                  item.active ? 'bg-indigo/40' : 'bg-text-muted/10'
                }`}
              />
              <span
                className={`text-[10px] font-medium ${
                  item.active ? 'text-indigo-light/70' : 'text-text-muted/30'
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Agent status */}
          <div className="rounded-md bg-white/[0.02] border border-white/[0.04] p-2 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
              <span className="text-[9px] text-text-muted/40 font-mono">Claude Code</span>
            </div>
            <Bar w="w-full" color="bg-indigo/10" />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Kanban area */}
          <div className={`flex-1 p-4 overflow-hidden ${shimmer}`}>
            <div className="flex gap-3 h-full">
              <KanbanColumn label="To Do" accent="bg-text-muted/30" cards={3} delay={0.6} />
              <KanbanColumn label="In Progress" accent="bg-indigo" cards={2} delay={0.8} />
              <KanbanColumn label="In Review" accent="bg-peach" cards={1} delay={1.0} />
              <KanbanColumn
                label="Done"
                accent="bg-[#28c840]"
                cards={2}
                delay={1.1}
              />
            </div>
          </div>

          {/* Terminal strip */}
          <div className="border-t border-white/[0.04] bg-bg/60 px-4 py-3 space-y-1.5">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                {['Claude Code', 'Terminal'].map((tab, i) => (
                  <span
                    key={tab}
                    className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                      i === 0
                        ? 'bg-indigo/15 text-indigo-light/60'
                        : 'text-text-muted/25'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>
            <TerminalLine prompt="$" text="get_project_context()" delay={1.2} />
            <TerminalLine prompt="→" text="3 active tasks, 2 blockers, 8 learning entries" delay={1.4} />
            <TerminalLine prompt="$" text="get_task_details({ card_id: 142 })" delay={1.6} />
          </div>
        </div>
      </div>
    </div>
  )
}
