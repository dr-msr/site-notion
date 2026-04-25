import React, { useState, useEffect } from "react"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

// Update this after deploying the CF Worker
// Will be: https://request-service.<your-subdomain>.workers.dev
// Or custom domain: https://api.drmsr.dev
const WORKER_URL = "https://request-service.drmsr.workers.dev"

type FormState = "idle" | "submitting" | "success" | "error"

const RequestForm: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [referrer, setReferrer] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // Auto-detect which page the user came from
    if (typeof window !== "undefined") {
      const ref = document.referrer
      if (ref && ref.includes(window.location.hostname)) {
        try {
          const url = new URL(ref)
          const path = url.pathname.replace(/^\//, "").replace(/\/$/, "")
          if (path && path !== "request") {
            setReferrer(path)
          }
        } catch {
          // ignore invalid referrer
        }
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setErrorMessage("")

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          referrer,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setFormState("success")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch (err: any) {
      setFormState("error")
      setErrorMessage(err.message || "Something went wrong. Please try again.")
    }
  }

  if (formState === "success") {
    return (
      <div className="mt-8 p-8 rounded-2xl border-2 border-green-8 bg-green-2 text-center">
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-9" />
        <h3 className="text-xl font-semibold text-gray-12 mb-2">Request Submitted</h3>
        <p className="text-gray-11">
          Thank you for your interest. I will review your request and get back to you within 48 hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 px-6 py-2 rounded-xl text-sm font-medium
            bg-gray-12 text-gray-1 hover:opacity-90 transition-opacity"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="p-6 rounded-2xl border border-gray-6 bg-gray-1 dark:bg-gray-3 dark:border-gray-5 space-y-5">
        <div>
          <label htmlFor="req-name" className="block text-sm font-medium text-gray-11 mb-1.5">
            Name <span className="text-red-9">*</span>
          </label>
          <input
            id="req-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-6 bg-white dark:bg-gray-4
              text-gray-12 placeholder:text-gray-8
              focus:outline-none focus:ring-2 focus:ring-gray-8 focus:border-transparent
              transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="req-email" className="block text-sm font-medium text-gray-11 mb-1.5">
            Email <span className="text-red-9">*</span>
          </label>
          <input
            id="req-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-6 bg-white dark:bg-gray-4
              text-gray-12 placeholder:text-gray-8
              focus:outline-none focus:ring-2 focus:ring-gray-8 focus:border-transparent
              transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="req-phone" className="block text-sm font-medium text-gray-11 mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            id="req-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+60 12-345 6789"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-6 bg-white dark:bg-gray-4
              text-gray-12 placeholder:text-gray-8
              focus:outline-none focus:ring-2 focus:ring-gray-8 focus:border-transparent
              transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="req-message" className="block text-sm font-medium text-gray-11 mb-1.5">
            Tell me about your project <span className="text-red-9">*</span>
          </label>
          <textarea
            id="req-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What do you need? What problem are you trying to solve? Any timeline or budget constraints?"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-6 bg-white dark:bg-gray-4
              text-gray-12 placeholder:text-gray-8
              focus:outline-none focus:ring-2 focus:ring-gray-8 focus:border-transparent
              transition-all text-sm resize-y min-h-[120px]"
          />
        </div>

        {referrer && (
          <input type="hidden" name="referrer" value={referrer} />
        )}

        {formState === "error" && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-red-2 border border-red-6 text-red-11 text-sm">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
            bg-gray-12 text-gray-1 font-medium text-sm
            hover:opacity-90 transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Request</span>
            </>
          )}
        </button>
      </div>

      {referrer && (
        <p className="text-xs text-gray-8 text-center">
          Referred from: /{referrer}
        </p>
      )}
    </form>
  )
}

export default RequestForm
