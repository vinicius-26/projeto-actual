
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar/NavBar'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>Actual Soluções</title>
      <NavBar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
