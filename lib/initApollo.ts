import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

let erxesApolloClient: any = null;

export const getErxesApolloClient = () => {
  if (erxesApolloClient) {
    return erxesApolloClient;
  }

  const NEXT_PUBLIC_ERXES_API_URL =
    process.env.NEXT_PUBLIC_ERXES_API_URL ||
    "https://unreadnewsletter.app.erxes.io/gateway/graphql";
  const NEXT_PUBLIC_ERXES_APP_TOKEN =
    process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || "";

  const httpLink = new HttpLink({
    uri: NEXT_PUBLIC_ERXES_API_URL,
    credentials: "include",
  });

  const authLink = new ApolloLink((operation, forward) => {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        "erxes-app-token": NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
  });

  erxesApolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    credentials: "include",
    cache: new InMemoryCache(),
  });

  return erxesApolloClient;
};
