import React from "react";
import type {AppProps} from "next/app";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import Header from "../components/header/header.component";
import Head from "next/head";
import SideMenu from "../components/side-menu/side-menu.component";
import NavState from "../context/nav.state";
import SideSubMenu from "../components/side-submenu/side-submenu.component";
import Cart from "../components/cart/cart.component";
import Search from "../components/search/search.component";
import initAuth from "../services/firebase/initAuth";
import ProductState from "../context/product.state";

initAuth();

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
  font-family: Acumin, Helvetica Neue, Roboto, Oxygen, -apple-system, BlinkMacSystemFont, 
    Ubuntu, Cantarell, Segoe UI, Fira Sans, Droid Sans, sans-serif;
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

function MyApp({Component, pageProps}: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles !== null) {
      // @ts-ignore: Object is possibly 'null'.
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
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
        <NavState>
          <ProductState>
            <Header />
            <SideMenu />
            <SideSubMenu />
            <Cart />
            <Search />
            <Component {...pageProps} />
          </ProductState>
        </NavState>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
