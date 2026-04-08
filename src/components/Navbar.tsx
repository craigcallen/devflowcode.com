import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#">
          <img
            src="https://assets.craigcallen.com/media/devflowcode/tertiary-logo-inverse.svg"
            alt="DevFlow"
            className="h-10"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          <a href="#features" className="hover:text-cream transition-colors">
            Features
          </a>
          <a href="#mcp" className="hover:text-cream transition-colors">
            MCP
          </a>
          <a href="#pricing" className="hover:text-cream transition-colors">
            Pricing
          </a>
          <a
            href="https://github.com/craigcallen/devflowcode.com/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>
        </div>

        <a
          href="#cta"
          className="rounded-full bg-pink px-4 py-2 text-sm font-medium text-white hover:bg-pink/80 transition-colors"
        >
          Request Early Access
        </a>
      </div>
    </nav>
  )
}
