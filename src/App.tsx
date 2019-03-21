import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Container } from 'reactstrap';
import { Query } from 'react-apollo';

import './index.css';
import './styles/Main.css';
import './styles/NavWrapper.css';

// Custom Elements
import MenuItem from './components/MenuItem';
import Introduction from './screens/Introduction';
import MainSpinner from './components/MainSpinner';
import Education from './screens/Education';

// Import GraphQL Queries
import { meQuery } from './graphql/queries/me';
import { Me } from './schemaTypes';

import { IEducation } from './custom/interface';

class App extends React.Component {
  public render() {
    return (
      <div>
        <div className="main-nav">
          <MenuItem/>
          <Introduction/>
          <Container className="wrapper--flex-center-space">
            <IoIosArrowDown
              size="68px"
              color="#e11414"
            />
          </Container>
        </div>

        <Query<Me> query={meQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <MainSpinner
                  name="circle"
                  color="#404040"
                  style={{
                    width: '80px',
                    height: '80px',
                  }}
                />
              );
            }

            if (!data || !data.me) {
              return null;
            }

            if (!data.me.education) {
              return null;
            }

            const educations = data.me.education as IEducation[];

            return (
              <Education
                educations={ educations }
              />
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
