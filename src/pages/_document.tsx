import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt" className='scroll-smooth'>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link rel="icon" type="image/svg+xml" href="iconpage.svg" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Gwendolyn:wght@400;700&family=Inria+Serif:ital,wght@0,300;1,400&display=swap" rel="stylesheet"/>
      </Head>     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
