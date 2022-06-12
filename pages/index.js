import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
          <Head>
              <title>First Next App</title>
              <link rel='icon' href='https://img.icons8.com/clouds/344/internet.png' />
          </Head>
          <div>
            <h2>Home page</h2>
            <p>
            orem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to 
            make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
    </div>
  )
}