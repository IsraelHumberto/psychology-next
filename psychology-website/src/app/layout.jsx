import '@/styles/globals.scss'
import { Josefin_Sans } from 'next/font/google'

const josefins = Josefin_Sans({ 
  weigth: ['300, 400, 600, 700, 800'],
  subsets: ['latin']
 })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={josefins.className}>{children}</body>
    </html>
  )
}
