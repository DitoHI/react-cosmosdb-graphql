import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

// setup Apollo Client
import { default as Apollo } from 'apollo-boost';
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
    : 'https://privateblog-server.azurewebsites.net/graphql';

const client = new Apollo({
  uri,
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
