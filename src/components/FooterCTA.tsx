import AnimatedSection from './AnimatedSection'
import EmailCapture from './EmailCapture'

export default function FooterCTA() {
  return (
    <>
      <AnimatedSection className="py-28" id="cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-cream tracking-tight mb-6">
            Stop explaining your codebase
            <br />
            to your agents.
          </h2>

          <div className="mt-8 max-w-md mx-auto">
            <EmailCapture className="justify-center" />
          </div>
        </div>
      </AnimatedSection>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <img src="https://assets.craigcallen.com/media/devflowcode/tertiary-logo-inverse.svg" alt="DevFlow" className="h-10" />
          </div>
          <div className="flex items-center gap-4">
            <span>macOS</span>
            <span className="text-border">|</span>
            <span>Free Beta</span>
          </div>
        </div>
      </footer>
    </>
  )
}
