import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/molecules/Footer' // optional

export const metadata: Metadata = {
  title: 'Artemis Design Labs',
  description: 'Design systems and prototypes for modern startups',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter bg-white text-gray-900 transition-colors duration-300">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
