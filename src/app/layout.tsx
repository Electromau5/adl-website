import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/molecules/Footer' // optional
import ThemeWrapper from './components/ThemeWrapper'

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme === 'light' ? 'light-mode' : 'dark-mode');
              })();
            `,
          }}
        />
      </head>
      <body className="font-inter transition-colors duration-300">
        <ThemeWrapper>
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  )
}
