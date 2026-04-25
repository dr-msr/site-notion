import Link from "next/link"
import { useRouter } from "next/router"
import { MessageSquarePlus } from "lucide-react"

const RequestFAB = () => {
  const router = useRouter()

  // Hide on the request page itself
  if (router.pathname === "/request" || router.asPath === "/request") {
    return null
  }

  return (
    <>
      {/* Desktop FAB */}
      <Link
        href="/request"
        className="hidden md:flex fixed bottom-8 right-8 z-[40] items-center gap-2
          bg-blue-9 hover:bg-blue-10 text-white
          px-5 py-3 rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          hover:shadow-xl hover:scale-105
          group"
        aria-label="Request a Service"
      >
        <MessageSquarePlus className="w-5 h-5" />
        <span className="text-sm font-medium">Request a Service</span>
      </Link>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[40] p-3
        bg-gradient-to-t from-black/80 to-transparent
        pointer-events-none">
        <Link
          href="/request"
          className="flex items-center justify-center gap-2
            bg-blue-9 hover:bg-blue-10 text-white
            w-full py-3 rounded-xl shadow-lg
            transition-all duration-200
            pointer-events-auto
            font-medium text-sm"
          aria-label="Request a Service"
        >
          <MessageSquarePlus className="w-5 h-5" />
          <span>Request a Service</span>
        </Link>
      </div>
    </>
  )
}

export default RequestFAB
