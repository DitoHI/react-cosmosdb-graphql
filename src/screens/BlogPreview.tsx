import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

import HeaderContainer from '../components/HeaderContainer';

import IBlog from '../custom/interface/IBlog';
import '../styles/Main.css';
import '../styles/CardContainer.css';

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
  const blogBannerStyle = {
    color: '#150940',
    fontSize: '20px',
    fontStyle: 'italic',
    textAlign: 'center' as 'center',
    paddingTop: '50px',
  };
  return (
    <Container>
      <div style={ headerContainerStyle }>
        <span style={ headerStyle }>
          Writing helps me to share the knowledges
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
      <div style={ blogBannerStyle }>
        "Reading gives us someplace to go when we have to stay where we are" - Mason Cooley
      </div>
    </Container>
  );
};

export default blogPreview;
