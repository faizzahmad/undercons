"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Place this file as a page in Next.js (e.g. app/coming-soon/page.tsx or pages/coming-soon.tsx)
// Requires Tailwind CSS and framer-motion installed

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  // Set a target date for countdown (example: 30 days from now)
  useEffect(() => {
    const target = new Date()
    target.setDate(target.getDate() + 30)

    const update = () => {
      const now = new Date().getTime()
      const distance = target.getTime() - now
      setTimeLeft(distance > 0 ? distance : 0)
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const formatTime = (ms: number | null) => {
    if (ms === null) return '-- : -- : -- : --'
    const totalSeconds = Math.floor(ms / 1000)
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${String(days).padStart(2, '0')}d : ${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`
  }

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address')
      return
    }
    // placeholder: integrate your subscribe API here
    setSubscribed(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-800 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Brand + message */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-extrabold tracking-tight">LN</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Lonnue</h1>
              <p className="text-sm text-slate-300">lonnue.com — something beautiful is coming soon</p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">We&rsquo;re building something delightful.</h2>

          <p className="text-slate-300 max-w-lg">
            Lonnue is under construction. 
          </p>

          {/* <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/6 hover:bg-white/10 border border-white/5 text-sm">Follow on Twitter</a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/6 hover:bg-white/10 border border-white/5 text-sm">Instagram</a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/6 hover:bg-white/10 border border-white/5 text-sm">GitHub</a>
          </div> */}

          {/* <form onSubmit={submit} className="mt-6 max-w-md w-full">
            <div className="flex items-center gap-3 bg-white/5 p-1 rounded-2xl border border-white/6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent outline-none px-4 py-3 text-sm placeholder:text-slate-400"
                type="email"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 rounded-2xl font-semibold text-sm shadow-lg hover:opacity-95"
              >
                {subscribed ? 'Subscribed' : 'Notify Me'}
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2">We respect your privacy. No spam, ever.</p>
          </form> */}
        </motion.section>

        {/* Right: Visual card + countdown */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <div className="rounded-3xl p-8 backdrop-blur-md bg-white/5 border border-white/6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Launching soon</h3>
                <p className="text-sm text-slate-300 mt-1">Stay tuned — we&rsquo;ll be live shortly.</p>
              </div>
              <div className="text-xs text-slate-400">v0.9.3</div>
            </div>

            {/* <div className="mt-8 grid grid-cols-1 gap-6">
              <div className="rounded-xl p-6 bg-white/3 border border-white/5">
                <div className="text-sm text-slate-300">Estimated launch</div>
                <div className="mt-3 text-2xl font-extrabold">{formatTime(timeLeft)}</div>
              </div>

              <div className="rounded-xl p-6 bg-white/3 border border-white/5">
                <div className="text-sm text-slate-300">What to expect</div>
                <ul className="mt-3 text-slate-100 list-disc list-inside space-y-1 text-sm">
                  <li>Beautiful product design</li>
                  <li>Fast & secure experience</li>
                  <li>Early access for subscribers</li>
                </ul>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <a href="#" className="text-sm underline text-slate-300">Contact us</a>
                <a href="#" className="text-sm underline text-slate-300">Privacy</a>
              </div>
            </div> */}
          </div>

          <div className="mt-6 flex items-center justify-center text-xs text-slate-400">© {new Date().getFullYear()} Lonnue — Built with care</div>
        </motion.aside>
      </div>

      {/* subtle background shapes */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-700 via-pink-700 to-transparent opacity-20 blur-3xl" />
        <div className="absolute -bottom-56 -right-40 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-sky-700 via-violet-700 to-transparent opacity-15 blur-3xl" />
      </div>
    </main>
  )
}
