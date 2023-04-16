import { Provider } from "react-redux";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import store from "../store/index";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:9002/graphql",
  headers: {
    "content-type": "application/json",
  },
});

const client = new ApolloClient({
  cache,
  link,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
