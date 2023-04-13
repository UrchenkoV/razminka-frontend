import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="h-full text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
