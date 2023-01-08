import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Shippori+Mincho+B1:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body id='body' smooth={true} duration={600} offset={-50}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
