import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleCheck } from '@fortawesome/pro-regular-svg-icons'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay },
})

const staticLines = [
  { label: 'All open tasks (30+ items)', width: '95%' },
  { label: 'Learning Center (10 entries)', width: '82%' },
  { label: 'Git log (5 commits)', width: '68%' },
  { label: 'Full repo metadata', width: '55%' },
]

export default function TokenComparison() {
  return (
    <AnimatedSection className="py-24 bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-4">
            THE DIFFERENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-cream tracking-tight">
            Static injection burns tokens before your agent says hello
          </h3>
          <p className="mt-3 text-text-muted max-w-lg mx-auto text-sm">
            DevFlow&rsquo;s MCP server injects zero upfront context. Agents fetch exactly what they need, when they need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Static / Before */}
          <motion.div
            className="rounded-xl border border-border bg-bg p-6 flex flex-col"
            {...fadeUp(0.1)}
          >
            <div className="flex items-center gap-2 mb-5">
              <FontAwesomeIcon icon={faCircleXmark} className="w-5 h-5 text-pink" />
              <span className="font-heading font-semibold text-cream">Static injection</span>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="rounded-lg bg-bg-raised border border-border p-4">
                <div className="text-xs font-mono text-text-muted mb-3">Session start prompt</div>
                <motion.div
                  className="space-y-2"
                  {...fadeUp(0.3)}
                >
                  {staticLines.map((line, i) => (
                    <div key={i}>
                      <div className="text-[11px] font-mono text-text-muted mb-1 hidden sm:block">{line.label}</div>
                      <div className="h-2.5 rounded-full bg-pink/20" style={{ width: line.width }} />
                    </div>
                  ))}
                </motion.div>
                <div className="mt-4 text-right text-xs font-mono text-pink font-medium">3,000&ndash;8,000+ tokens</div>
              </div>

              <div className="space-y-2.5 pt-1 mt-auto">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-pink/60" />
                  Slow first response
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-pink/60" />
                  Context goes stale mid-session
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-pink/60" />
                  Burns 4&ndash;8% of context window upfront
                </div>
              </div>
            </div>
          </motion.div>

          {/* MCP / After */}
          <motion.div
            className="rounded-xl border border-indigo/30 bg-bg p-6 shadow-lg shadow-indigo-glow/10 flex flex-col"
            {...fadeUp(0.2)}
          >
            <div className="flex items-center gap-2 mb-5">
              <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-indigo" />
              <span className="font-heading font-semibold text-cream">MCP lazy load</span>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="flex-1 rounded-lg bg-bg-raised border border-indigo/20 p-4 flex flex-col">
                <div className="text-xs font-mono text-text-muted mb-3">Session start prompt</div>
                <motion.div
                  className="space-y-2"
                  {...fadeUp(0.4)}
                >
                  <div>
                    <div className="text-[11px] font-mono text-indigo-light/70 mb-1 hidden sm:block">Nothing &mdash; agents call tools on demand</div>
                    <div className="h-1.5 rounded-full bg-indigo/30 w-[8%]" />
                  </div>
                </motion.div>
                <div className="mt-auto pt-4 text-right text-xs font-mono text-indigo-light font-medium">0 tokens injected</div>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-indigo" />
                  Instant first response
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-indigo" />
                  Live data on every tool call
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-indigo" />
                  Write access &mdash; agents create tasks, move cards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three-tier comparison table */}
        <motion.div
          className="mt-12 rounded-xl border border-border bg-bg overflow-hidden"
          {...fadeUp(0.3)}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left bg-bg-raised">
                <th className="px-5 py-3.5 font-heading font-semibold text-cream">Approach</th>
                <th className="px-5 py-3.5 font-heading font-semibold text-cream">Tokens</th>
                <th className="px-5 py-3.5 font-heading font-semibold text-cream hidden sm:table-cell">What&rsquo;s included</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border">
                <td className="px-5 py-3.5">Before optimization</td>
                <td className="px-5 py-3.5 font-mono text-pink">3,000&ndash;8,000+</td>
                <td className="px-5 py-3.5 hidden sm:table-cell">All tasks, 10 LC entries, commits, metadata</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-5 py-3.5">Hard limits</td>
                <td className="px-5 py-3.5 font-mono text-peach">800&ndash;1,500</td>
                <td className="px-5 py-3.5 hidden sm:table-cell">Top 5 tasks, 3 LC entries, branch name</td>
              </tr>
              <tr className="bg-indigo/5">
                <td className="px-5 py-3.5 text-indigo-light font-medium">MCP on-demand</td>
                <td className="px-5 py-3.5 font-mono text-indigo-light font-semibold">0</td>
                <td className="px-5 py-3.5 hidden sm:table-cell text-indigo-light">Nothing injected &mdash; 54 tools available on demand</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
