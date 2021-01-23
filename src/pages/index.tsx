import Head from "next/head";
import { ServicesWeProvide } from "../components/ServicesWeProvide/ServicesWeProvide";
import { Home } from "../components/Home/Home";
import { Appointment } from "../components/Appointment/Appointment";
import { Layout } from "../components/Layout/Layout";

export default function Index() {
   return (
      <Layout>
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
      </Layout>
   );
}
