import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer'


const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>GOAT MONEY</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <header className={styles.title}>
        <p className={styles.titleStyle}>Goat Money </p>
      </header>

      <Image
        src="/png1.png"
        width={400}
        height={400} />

      <p className={styles.description}>
        The next generation memecoin on Avalanche Network
      </p>

      <Footer/>      

    </main>
  </div>
)

export default Home
