import Head from "next/head";
import { Navmenu } from "../components/Navbar/Navmenu";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Doctors Portal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <nav>
            <Navmenu />
         </nav>
         <main></main>

         <footer></footer>
      </div>
   );
}
