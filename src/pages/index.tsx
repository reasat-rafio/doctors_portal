import Head from "next/head";
import { ServicesWeProvide } from "../components/ServicesWeProvide/ServicesWeProvide";
import { Home } from "../components/Home/Home";
import { Appointment } from "../components/Appointment/Appointment";

export default function Index() {
   return (
      <div>
         <Head>
            <title>Doctors Portal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

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
