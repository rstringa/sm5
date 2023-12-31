// import './bootsrap.css'
import './scss/estilos.scss'
import { Roboto } from 'next/font/google'
import Script from 'next/script'

const roboto = Roboto(
    { subsets: ['latin'],
      weight:['400','700']
    }
  )

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script 
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" 
      strategy="afterInteractive"/>
       <Script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" 
      strategy="lazyOnload"/>
      <body>{children}</body>
    </html>
  )
}
