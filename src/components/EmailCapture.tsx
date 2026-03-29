import { useState } from 'react'

const WAITLIST_URL = 'https://nc6zkg2f6h724xjukcewfaspxa0xiris.lambda-url.us-east-1.on.aws/'

export default function EmailCapture({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    try {
      const res = await fetch(WAITLIST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={`text-peach text-sm font-medium py-3 ${className}`}>
        You're on the list. We'll be in touch.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 ${className}`}
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-full bg-bg-raised border border-border px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full bg-pink px-6 py-3 text-sm font-medium text-white hover:bg-pink/80 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
      >
        {status === 'loading' ? 'Joining...' : 'Request Early Access'}
      </button>
      {status === 'error' && (
        <p className="text-pink text-xs sm:absolute sm:mt-14">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  )
}
