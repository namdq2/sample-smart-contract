import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PriorityExample from "../components/connectors/PriorityExample";
import MetaMaskCard from "../components/connectors/MetaMaskCard";
import {ToastContainer} from 'react-nextjs-toast'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blue Wallet - Give me a coffee!</title>
                <meta name="description" content="Give me a coffee!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    Welcome to <a href="#">Blue Wallet!</a>
                </h1>
            </header>
            <main className={styles.main}>
                <PriorityExample/>
                <div style={{display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif'}}>
                    <MetaMaskCard/>
                </div>
            </main>
            <ToastContainer align={"right"} position={"bottom"}/>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
