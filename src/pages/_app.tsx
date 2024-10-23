import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import Header from "@/components/Header";


import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
        <Header>
        <Component {...pageProps} />
        </Header>
    </ApolloProvider>
  );
}

export default MyApp;
