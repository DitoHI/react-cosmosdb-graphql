import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

// setup Apollo Client
import { ApolloLink, ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// setup redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';

declare global {
  interface Window {
    REACT_APP_SERVER_URI: any;
  }
}

// static backend server
const uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/graphql'
    : 'https://public-blog-api.herokuapp.com/graphql';

const httpLink = new HttpLink({ uri });

const authLink = new ApolloLink((operation: any, forward: any) => {
  const token = process.env.REACT_APP_API_TOKEN;

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
