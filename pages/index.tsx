import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Buttons } from '../components/atoms/'
import { Headers } from '../components/molecules'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dark, setDark] = useState(false)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers />
      <h1 className={`${dark ? 'light' : `${styles.expand}`}`}>
        testingggg seva
      </h1>
      <h2 className={`dark ${styles.expand}`}>Hello Marcell Antonius</h2>
      <h1 className="test">testing </h1>
      <h1 className={styles.testing}>testing </h1>
      <button onClick={() => setDark(!dark)}>click</button>
      <Buttons />
    </>
  )
}
