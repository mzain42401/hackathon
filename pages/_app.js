import '@/styles/globals.css'
import Header from './components/Header'
import { SessionProvider } from 'next-auth/react'
import { createContext } from 'react'
const SomeContext = createContext()
export default function App({ Component, pageProps,session }) {

  return (
    <>

    <SessionProvider session={session}>
<SomeContext.Provider value="jhkash">
    <Header/>
    <Component {...pageProps} />
    </SomeContext.Provider>
    </SessionProvider>
    </>
  )
}
