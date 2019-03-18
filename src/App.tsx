import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Container } from 'reactstrap';
import { Query } from 'react-apollo';

import './styles/Main.css';
import './styles/NavWrapper.css';

// Custom Elements
import MenuItem from './components/MenuItem';
import Introduction from './components/Introduction';

// Import GraphQL Queries
import { meQuery } from './graphql/queries/me';
import { Me } from './schemaTypes';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Query<Me> query={meQuery}>
          {({ data, loading }) => {

            if (loading) {
              return null;
            }

            if (!data) {
              return null;
            }

            return (
              <div className="main-nav">
                <MenuItem/>
                <Introduction/>
                <Container className="wrapper--flex-center-space">
                  <IoIosArrowDown
                    size="68px"
                    color="#e11414ff"
                  />
                </Container>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
