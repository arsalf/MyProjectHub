import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  return (
    <div className="flex justify-center items-center h-[100vh] flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white md:hover:bg-[url('/MyPhoto.jpg')] hover:bg-[url('/potraitPhoto.jpeg')] bg-cover hover:animate-in hover:fade-in hover:duration-1000">
      <Head>
        <title>Home | Arsal Fadilah Portfolio Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center cursor-default">

        <h1
          className='md:text-4xl text-3xl'>
          Welcome to my <span className='animate-pulse text-transparent rounded-md hover:text-white bg-gray-300 hover:bg-transparent hover:animate-none font-bold'>awesome</span> portfolio
        </h1>
        <hr className="w-1/2 border-1 border-gray-300 mt-4" />
        <p className="mt-3 md:text-2xl text-lg">
          Lets
          <Link href="/baru" className="p-2 text-white font-mono  bg-blue-500 rounded-md hover:bg-blue-600  hover:font-bold ml-2" legacyBehavior={false}>
            Get Started!
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}
