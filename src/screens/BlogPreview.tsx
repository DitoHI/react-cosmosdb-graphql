import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

import HeaderContainer from '../components/HeaderContainer';

import IBlog from '../custom/interface/IBlog';

interface Props {
  blogs?: IBlog[];
}

const blogPreview: React.FunctionComponent<Props> = ({ blogs }) => {
  const headerContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  };
  const headerStyle = {
    color: '#150940',
    fontWeight: 600,
    fontSize: '2rem',
  };
  return (
    <Container>
      <div style={ headerContainerStyle }>
        <span style={ headerStyle }>
          Writing is helping me to share the knowledges
        </span>
        <Button color="link">
          <NavLink to="/blog">
            <HeaderContainer
              headerTitle="Discover more of my writings"
              headerTextStyle={ {
                color: '#7b59ff',
                fontSize: '1rem',
              } }
              headerDividerStyle={ {
                display: 'none',
              } }
              headerContainerStyle={ {
                alignItems: 'start',
              } }
            />
          </NavLink>
        </Button>
      </div>
    </Container>
  );
};

export default blogPreview;
