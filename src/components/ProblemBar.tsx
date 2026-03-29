import AnimatedSection from './AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faArrowRightArrowLeft, faLightbulb } from '@fortawesome/pro-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const problems: { icon: IconDefinition; text: string }[] = [
  {
    icon: faEyeSlash,
    text: 'Your AI agents start every session blind',
  },
  {
    icon: faArrowRightArrowLeft,
    text: 'Your context lives across 5 different tools',
  },
  {
    icon: faLightbulb,
    text: 'Your best decisions disappear after the PR merges',
  },
]

export default function ProblemBar() {
  return (
    <AnimatedSection className="py-24 bg-bg-raised border-y border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="text-indigo">
                <FontAwesomeIcon icon={p.icon} className="w-6 h-6" />
              </div>
              <p className="text-cream font-heading text-lg font-medium">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
