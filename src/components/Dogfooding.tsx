import AnimatedSection from './AnimatedSection'

export default function Dogfooding() {
  return (
    <AnimatedSection className="py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-6">
          DOGFOODING
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream tracking-tight mb-6">
          Built inside DevFlow. Every day.
        </h2>
        <p className="text-text-muted text-lg leading-relaxed">
          Every task, decision, brainstorm, and PR in DevFlow's own development
          is tracked here. The kanban you're reading about managed its own
          feature backlog. The learning center captured every architectural
          decision. This page was written from an idea session.{' '}
          <span className="text-cream font-medium">
            That's not a demo — that's the product.
          </span>
        </p>
      </div>
    </AnimatedSection>
  )
}
