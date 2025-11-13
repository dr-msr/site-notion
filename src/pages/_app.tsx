import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { pretendard } from "src/assets"
import "src/styles/globals.css"
import { useState } from "react"

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Create a client instance once on the client side
  // This persists for the session and avoids recreating on every render
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes default
        refetchOnWindowFocus: false,
      },
    },
  }))

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <div className={pretendard.className}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}

export default App
