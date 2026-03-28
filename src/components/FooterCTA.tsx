import AnimatedSection from './AnimatedSection'
import EmailCapture from './EmailCapture'

export default function FooterCTA() {
  return (
    <>
      <AnimatedSection className="py-28" id="cta">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
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
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#6366f1" />
              <path
                d="M8 11l6 5-6 5"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="16"
                y1="21"
                x2="24"
                y2="21"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            DevFlow by Allen Media
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
