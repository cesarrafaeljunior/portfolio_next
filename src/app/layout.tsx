import type { Metadata } from 'next'
import "../styles/global.css"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["300", "400", "500", "700"], 
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-900 text-white`}>
        {children}
      </body>
    </html>
  )
}