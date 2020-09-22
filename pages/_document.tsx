import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
        </Head>
        <body className='app'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
