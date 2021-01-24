import React from "react";
// Modules
import { AppProps } from "next/app";
import Head from "next/head";
// MUI Core
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// Utils
import theme from "../utils/theme";
// scss
import "../styles/global.scss";
// Global Store
import { GlobalState } from "../store/index";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   React.useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentElement) {
         jssStyles.parentElement.removeChild(jssStyles);
      }
   }, []);

   return (
      <>
         <Head>
            <title>My App</title>
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width"
            />
         </Head>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalState>
               <Component {...pageProps} />
            </GlobalState>
         </ThemeProvider>
      </>
   );
};

export default MyApp;
