import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@src/components/googleAnalytics';

const inter = Inter({ subsets: ['latin'] })

const title = 'Htet Arkar Hlaing'
const desc = 'Mixer and Coder -  Full stack developer with 3 years of experience. Beyond my tech skills, Im a fervent home DJ, specializing in house, hard styles, trap, and dubstep.'

export const metadata: Metadata = {
  metadataBase: new URL('https://htetarkarhlaing.vamvamtech.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: title,
  description: desc,
  openGraph: {
    title: title,
    description: desc,
    images: ["/seo.png"]
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: desc,
    images: ["/seo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id=
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
