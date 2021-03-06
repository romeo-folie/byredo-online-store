/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheets} from "@material-ui/core/styles";
import {ServerStyleSheet} from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  // Styled components
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheet.getStyleElement(),
        sheets.getStyleElement(),
      ],
      // styles: (
      //   <>
      //     {initialProps.styles}
      //     {sheet.getStyleElement()}
      //     {sheets.getStyleElement()}
      //   </>
      // ),
    };
  } finally {
    sheet.seal();
  }
};
