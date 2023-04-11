import NavbarComponent from '@/components/navbarcomponent'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return <SessionProvider session={session}>
    <NavbarComponent /><Component {...pageProps} />
    </SessionProvider>
}
