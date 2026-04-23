import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQrcode, faWifi, faShieldCheck, faCloud } from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

/* ────────────────────────────────────────────
   Remote Sessions spotlight — connect to your
   dev environment from any device.
   ──────────────────────────────────────────── */

const steps: { icon: IconDefinition; title: string; detail: string }[] = [
  {
    icon: faPlay,
    title: 'Start a persistent session',
    detail:
      'DevFlow launches Claude Code on your machine. Close the app, walk away — the session keeps running in the background. No lost work.',
  },
  {
    icon: faQrcode,
    title: 'Share a link or QR code',
    detail:
      'A connection URL and QR code appear in the DevFlow status bar. Cloud-routed — no VPN, no port forwarding, no setup.',
  },
  {
    icon: faWifi,
    title: 'Connect from any device',
    detail:
      'Open the link from your phone, tablet, or another computer. Full access to tasks, notes, git, learning entries, and all your integrations.',
  },
]

/* ── Stacked mockup: desktop → signal → phone ── */

function ConnectionMockup() {
  return (
    <div className="flex flex-col items-center gap-0">
      {/* Desktop window — origin session */}
      <motion.div
        className="w-full max-w-[380px] rounded-xl border border-border bg-bg-raised overflow-hidden shadow-lg shadow-indigo-glow/8"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[10px] text-text-muted/50 font-mono">DevFlow — my-project</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-[10px] leading-relaxed space-y-2">
          <div className="text-text-muted/40">~ claude-code session active</div>
          <div>
            <span className="text-indigo">❯</span>{' '}
            <span className="text-cream/70">Implementing auth middleware...</span>
          </div>
          <div className="text-text-muted/40 pl-3">
            ✓ Created src/middleware/auth.ts
            <br />
            ✓ Added bearer token validation
            <br />
            <span className="text-indigo/60">⠋</span> Running test suite...
          </div>
        </div>

        {/* Status bar with QR + share link */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-t border-border bg-bg/60">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
            <span className="text-[9px] text-[#28c840]/70 font-mono">Session shared</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {/* Mini QR */}
            <div className="w-5 h-5 rounded-[3px] bg-cream/80 p-[2px] grid grid-cols-4 grid-rows-4 gap-[1px]">
              {[1,1,0,1, 1,0,1,0, 0,1,0,1, 1,0,1,1].map((f, i) => (
                <div key={i} className={`rounded-[0.5px] ${f ? 'bg-bg' : 'bg-transparent'}`} />
              ))}
            </div>
            <span className="text-[8px] text-text-muted/30 font-mono">devflow.cloud/s/a8f3k2</span>
          </div>
        </div>
      </motion.div>

      {/* Connection signal — animated dots flowing down */}
      <motion.div
        className="flex flex-col items-center py-2 gap-1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="w-px h-3 bg-gradient-to-b from-indigo/40 to-indigo/10" />
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo animate-pulse" />
          <FontAwesomeIcon icon={faCloud} className="w-3.5 h-3.5 text-indigo/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-indigo animate-pulse [animation-delay:0.3s]" />
        </div>
        <span className="text-[8px] font-mono text-indigo/40 tracking-wider">CLOUD RELAY</span>
        <div className="w-px h-3 bg-gradient-to-b from-indigo/10 to-indigo/40" />
      </motion.div>

      {/* Remote browser window — same chrome pattern as origin */}
      <motion.div
        className="w-full max-w-[380px] rounded-xl border border-indigo/25 bg-bg-raised overflow-hidden shadow-lg shadow-indigo-glow/15"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {/* Chrome bar — browser style */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          {/* URL bar */}
          <div className="ml-2 flex-1 flex items-center gap-2 rounded-md bg-bg/60 border border-border px-2.5 py-1">
            <span className="text-[9px] text-text-muted/40 font-mono truncate">devflow.cloud/s/a8f3k2</span>
          </div>
          <div className="flex items-center gap-1.5 ml-2">
            <div className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
            <span className="text-[8px] text-[#28c840] font-mono font-semibold">Connected</span>
          </div>
        </div>

        {/* Remote session header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg/40">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWifi} className="w-3 h-3 text-indigo/50" />
            <span className="text-[10px] text-cream/60 font-medium">Remote Session</span>
          </div>
          <span className="text-[9px] bg-indigo/10 text-indigo/60 px-2 py-0.5 rounded font-mono font-medium">my-project</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 space-y-2.5 font-mono text-[10px] leading-relaxed">
          <div>
            <span className="text-indigo">❯</span>{' '}
            <span className="text-peach">get_project_context()</span>
          </div>
          <div className="text-text-muted/60 pl-3 space-y-0.5">
            <div>✓ 3 active tasks</div>
            <div>✓ 12 learning entries</div>
            <div>✓ main · clean</div>
          </div>
          <div className="h-px bg-border" />
          <div>
            <span className="text-indigo">❯</span>{' '}
            <span className="text-peach">move_task(</span>
            <span className="text-cream/50">408, "Done"</span>
            <span className="text-peach">)</span>
          </div>
          <div className="text-[#28c840]/60 pl-3">✓ Card 408 → Done</div>
          <div>
            <span className="text-indigo">❯</span>{' '}
            <span className="text-peach">git_push()</span>
          </div>
          <div className="text-[#28c840]/60 pl-3">✓ Pushed 2 commits to main</div>
          <div className="pt-1">
            <span className="text-indigo">❯</span>{' '}
            <span className="text-cream/20 animate-pulse">▌</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function RemoteSessions() {
  return (
    <AnimatedSection className="py-28 bg-bg-raised border-t border-border" id="remote-sessions">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy + steps */}
          <div>
            <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-6">
              REMOTE SESSIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight mb-4">
              Work from anywhere, never lose your place.
            </h2>
            <p className="text-text-muted leading-relaxed mb-10">
              Connect to your AI-powered development environment from any device —
              your phone, tablet, or another computer — using a simple link or QR code.
              Sessions persist in the background so you never lose your place.
            </p>

            {/* How it works — 3-step flow */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="group flex gap-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-bg-card border border-border flex items-center justify-center text-indigo group-hover:border-indigo/40 transition-colors">
                      <FontAwesomeIcon icon={step.icon} className="w-5 h-5" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-border" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-cream font-heading font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compact trust signals */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { icon: faShieldCheck, label: 'Bearer token auth' },
                { icon: faCloud, label: 'Cloud-routed' },
                { icon: faWifi, label: 'Any network' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-lg border border-border bg-bg/40 px-3 py-2"
                >
                  <FontAwesomeIcon icon={badge.icon} className="w-3.5 h-3.5 text-indigo/60" />
                  <span className="text-[11px] text-text-muted/60 font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: stacked connection mockup */}
          <div>
            <ConnectionMockup />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
