
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>Actual Soluções</title>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
