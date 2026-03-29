import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const codeSnippet = `// claude_desktop_config.json
{
  "mcpServers": {
    "devflow": {
      "command": "devflow-mcp",
      "args": ["--repo", "my-project"]
    }
  }
}

// Agent queries DevFlow automatically
> get_project_context()
> get_task_details({ card_id: 408 })
> list_notes()
> get_learning_context()`

const points = [
  'One config copy per agent — paste it, connect, done',
  'Context scoped to the active repo automatically',
  'Works with Claude Code, Codex, Gemini, and any MCP-compatible agent',
  'Drag a card to In Progress — agent launches with full context',
]

export default function MCPDeepDive() {
  return (
    <AnimatedSection className="py-28 bg-bg-raised border-y border-border" id="mcp">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-6">
              MCP PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight mb-6">
              Your AI agents finally know what's going on
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              DevFlow runs a local MCP server that exposes your entire project —
              tasks, notes, learning entries, repo context, PR history — to any
              agent that speaks MCP. Claude Code, Codex, Gemini. They connect,
              query, and execute without you re-explaining anything.
            </p>
            <ul className="space-y-3">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-muted"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <svg
                    className="w-4 h-4 text-indigo mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="rounded-xl border border-border bg-bg overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-raised">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-text-muted font-mono">
                mcp-config.json
              </span>
            </div>
            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className={line.startsWith('//') || line.startsWith('>') ? 'text-text-muted' : 'text-indigo-light'}>
                    {line.startsWith('>') ? (
                      <span className="text-peach">{line}</span>
                    ) : line.startsWith('//') ? (
                      <span className="text-text-muted">{line}</span>
                    ) : (
                      <span className="text-text">{line}</span>
                    )}
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
