import React from "react";
import type {AppProps} from "next/app";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import Header from "../components/header/header.component";
import Head from "next/head";
import SideMenu from "../components/side-menu/side-menu.component";
import NavState from "../context/nav.state";
import Cart from "../components/cart/cart.component";
import Search from "../components/search/search.component";
import {AuthProvider} from "../context/AuthContext";
import ProductState from "../context/product.state";
import {CheckoutProvider} from "../context/checkout.state";
import FullScreenLoader from "../components/full-screen-loader/full-screen-loader.component";
import {useNavState} from "../context/nav.state";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Acumin";
  src: url("/fonts/acumin/Acumin-RPro.otf");
  font-style: normal;
  font-weight: 400;
  font-display: block;
}

@font-face {
  font-family: "Acumin";
  src: url("/fonts/acumin/Acumin-BdPro.otf");
  font-style: bold;
  font-weight: 800;
  font-display: block;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  position: relative;
  font-size: 15px;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.5;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

* {
  box-sizing: border-box;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    /* border: 1px solid #ffffff; */
    -webkit-text-fill-color: #000000;
    -webkit-box-shadow: 0 0 0px 1000px #e3e3e3 inset;
    transition: background-color 5000s ease-in-out 0s;
}


`;

const theme = {
  primary: "#e3e3e3",
  secondary: "#ffffff",
  accent: "#000000",
};

import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles !== null) {
      // @ts-ignore: Object is possibly 'null'.
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <NavState>
      <AppContent Component={Component} pageProps={pageProps} />
    </NavState>
  );
}

function AppContent({Component, pageProps}: any) {
  const router = useRouter();
  const {state, dispatch} = useNavState();

  // Initial load only — the FullScreenLoader is a one-time entry experience.
  // Route changes are handled by the AnimatePresence page transition below.
  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({type: "SET_LOADING", payload: false});
    }, 2500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@400;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link
            rel="preload"
            href="/fonts/acumin/Acumin-RPro.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/acumin/Acumin-BdPro.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <AuthProvider>
          <CheckoutProvider>
            <ProductState>
              {/* LayoutGroup is required so layoutId="cart-bag" resolves
                  across FullScreenLoader (sibling) and Header→CartIcon */}
              <LayoutGroup>
                <FullScreenLoader />
                <Header />
                <SideMenu />
                <Cart />
                <Search />
                <div style={{position: "relative", width: "100%", height: "100vh", overflow: "hidden"}}>
                  <AnimatePresence>
                    <motion.div
                      key={router.asPath}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.35, ease: "easeInOut"}}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Component {...pageProps} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </LayoutGroup>
            </ProductState>
          </CheckoutProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
