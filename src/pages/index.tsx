import Head from "next/head";
import { About } from "../components/About/About";
import { Home } from "../components/Home/Home";
import { Navmenu } from "../components/Navbar/Navmenu";

export default function Index() {
   return (
      <div>
         <Head>
            <title>Doctors Portal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <nav>
            <Navmenu />
         </nav>
         <main>
            <Home />
            <About />
         </main>

         <footer></footer>
      </div>
   );
}
