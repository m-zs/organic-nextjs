import { Html, Head, Main, NextScript } from "next/document";

export const Document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
