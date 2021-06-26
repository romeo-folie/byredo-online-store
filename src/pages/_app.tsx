import type {AppProps} from "next/app";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import Header from "../components/header/header.component";
import Head from "next/head";
import SideMenu from "../components/side-menu/side-menu.component";
import SideMenuState from "../context/sidemenu.state";

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
  font-family: Roboto,Oxygen,Acumin,Helvetica Neue, -apple-system, BlinkMacSystemFont, 
    Ubuntu, Cantarell, Segoe UI, Fira Sans, Droid Sans, sans-serif;
  position: relative;
  font-size: 15px;
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
`;

const theme = {
  primary: "#e3e3e3",
  secondary: "#ffffff",
  accent: "#000000",
};

function MyApp({Component, pageProps}: AppProps) {
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
        <SideMenuState>
          <Header />
          <SideMenu />
        </SideMenuState>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
