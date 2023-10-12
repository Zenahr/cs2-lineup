import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CS2 Interactive Lineup Reference (CILR)',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
