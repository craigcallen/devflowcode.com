import { motion } from 'framer-motion'
import EmailCapture from './EmailCapture'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo/8 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-4 py-1.5 text-sm text-text-muted mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Free beta — now available for macOS
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          One context.
          <br />
          <span className="bg-gradient-to-r from-indigo to-violet bg-clip-text text-transparent">
            Every agent.
          </span>
          <br />
          Every developer.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          DevFlow is the AI-native desktop workspace that keeps Claude Code, Codex,
          and Gemini working from the same knowledge — your tasks, your decisions,
          your codebase memory. All in one place.
        </motion.p>

        <motion.div
          className="mt-10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <EmailCapture className="justify-center" />
        </motion.div>

        <motion.p
          className="mt-4 text-xs text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Built inside DevFlow. Every feature you see was designed, tracked, and shipped here.
        </motion.p>

        {/* App screenshot placeholder */}
        <motion.div
          className="mt-16 mx-auto max-w-3xl rounded-xl border border-border bg-bg-raised overflow-hidden shadow-2xl shadow-indigo-glow/20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-text-muted font-mono">DevFlow — devflowcode.com</span>
          </div>
          <div className="aspect-[16/9] bg-bg flex items-center justify-center">
            <p className="text-text-muted text-sm">App screenshot — coming soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
