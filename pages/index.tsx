import Image from 'next/image'
import { Inter } from 'next/font/google'
import GameOne from '../components/GameOne'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <Head>
        <title>Cash Overflow</title>
        <meta name='description' content='etc...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GameOne/>
    </>
  )
}
