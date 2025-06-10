import './globals.css'
import type { Metadata } from 'next'
import Header from './components/molecules/Header'
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter bg-white text-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
