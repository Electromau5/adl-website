import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer' // optional

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
      href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body className="font-satoshi bg-white text-gray-900">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </body>
</html>

  )
}
