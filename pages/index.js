import Head from 'next/head'
import Header from '@components/Header/Header'
import Footer from '@components/Footer'
import Landing from '@components/Landing/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  )
}
