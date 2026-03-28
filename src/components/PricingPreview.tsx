import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const plans = [
  {
    name: 'Free Beta',
    highlight: true,
    price: '$0',
    description: 'Full access during beta',
    features: [
      'All features unlocked',
      'MCP server included',
      'No credit card required',
      'Limited seats',
    ],
    cta: 'Join the beta',
  },
  {
    name: 'Pro',
    highlight: false,
    price: 'Coming Soon',
    description: 'Everything in beta, plus more',
    features: [
      'Everything in beta',
      'Priority support',
      'Team features',
      'Cloud sync (roadmap)',
    ],
    cta: 'Get notified',
  },
]

export default function PricingPreview() {
  return (
    <AnimatedSection className="py-28" id="pricing">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-indigo/10 border border-indigo/20 px-3 py-1 text-xs font-medium text-indigo-light font-mono mb-4">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Free while it lasts
          </h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto">
            Get full access during beta. No credit card. No catch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-xl p-6 border ${
                plan.highlight
                  ? 'border-indigo bg-bg-card shadow-lg shadow-indigo-glow/10'
                  : 'border-border bg-bg-card'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo px-3 py-0.5 text-xs font-medium text-white">
                  Available now
                </div>
              )}
              <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
              <div className="text-2xl font-bold text-white mb-1">{plan.price}</div>
              <p className="text-text-muted text-sm mb-6">{plan.description}</p>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-text-muted">
                    <svg
                      className="w-4 h-4 text-indigo shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-indigo text-white hover:bg-indigo-light'
                    : 'bg-bg-raised border border-border text-white hover:border-indigo/40'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
