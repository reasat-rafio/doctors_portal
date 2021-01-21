import Head from "next/head";
import { ServicesWeProvide } from "../components/ServicesWeProvide/ServicesWeProvide";
import { Home } from "../components/Home/Home";
import { Navmenu } from "../components/Navbar/Navmenu";
import { Appointment } from "../components/Appointment/Appointment";
import { Main } from "next/document";

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
            <section className="landingSection">
               <Home />
               <ServicesWeProvide />
            </section>
            <Appointment />
         </main>

         <footer></footer>
      </div>
   );
}
