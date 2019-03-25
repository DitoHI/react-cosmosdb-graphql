import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

// setup Apolle Client
import { default as Apollo } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// setup redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

const client = new Apollo({
  uri: 'https://hafizhprivateblogapi.azurewebsites.net/graphql',
  credentials: 'include',
});

ReactDOM.render(
  <ApolloProvider client={ client }>
    <Provider store={ store }>
      <App/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
