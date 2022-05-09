import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
          <link
            rel="preconnect" href="https://fonts.googleapis.com" 
          />
          <link 
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
          />
          <link 
            rel="icon"
            href="public/icons8-wave-lines-24.png"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
};

export default MyDocument