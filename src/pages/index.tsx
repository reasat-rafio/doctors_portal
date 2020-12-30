import Head from "next/head";
import { AppHeader } from "../components/appHeader/AppHeader";
import styles from "../styles/Home.module.scss";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Doctors portal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <header>
            <AppHeader />
         </header>

         <main className={styles.main}></main>

         <footer className={styles.footer}></footer>
      </div>
   );
}
