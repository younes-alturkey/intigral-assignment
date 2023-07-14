import WindowWrapper from '@/components/window-wrapper'
import metadata from '@/config/metadata'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <Component {...pageProps} />

      <WindowWrapper>
        <Toaster
          position="top-center"
          toastOptions={{ className: 'react-hot-toast' }}
        />
      </WindowWrapper>

      <NextTopLoader
        color="#4285f4"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #4285f4,0 0 5px #4285f4"
      />
    </>
  )
}
