import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.scss'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Clodoaldo Dantas',
  description: 'Desenvolvedor Front-end 💚',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
