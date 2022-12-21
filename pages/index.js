import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <Head>
        <title>Arsal Fadilah | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">

        <Header title="Welcome to See My Project" />
        <hr className="w-1/2 border-1 border-gray-300 mt-4" />
        <p className="mt-3 text-2xl">
          Lets 
          <Link href="/baru" className="p-2 font-mono text-lg bg-blue-100 rounded-md hover:bg-blue-300  hover:font-bold ml-2"  legacyBehavior={false}>
            Get Started!
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}
