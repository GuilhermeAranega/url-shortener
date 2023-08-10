import './globals.css'
import Header from './components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Url Shortener',
  description: 'Shorten links',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-gray-950'>
        <header>
          <Header />
        </header>
        <main> { children }</main>
      </body>
    </html>
  )
}

// e oq tava antes no return do RootLayout
// <body> className={inter.className}>{children} </body>