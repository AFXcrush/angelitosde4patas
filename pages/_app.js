import "../styles/globals.css";
import Script from "next/script";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-JCR5Q5BWZW"
      />

      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-JCR5Q5BWZW');`}
      </Script>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
