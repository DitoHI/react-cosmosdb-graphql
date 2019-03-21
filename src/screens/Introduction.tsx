import * as React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import '../styles/Introduction.css';
import './../styles/Main.css';
import profileMePng from '../images/profileMe.png';

import HeaderContainer from '../components/HeaderContainer';
import FollowMe from '../components/FollowMe';

class Introduction extends React.Component {
  render() {
    return (
      <Jumbotron className="wrapper--introduction">
        <Container className="wrapper--padding-top-bottom-20">
          <Row>
            <Col lg="6">
              <img
                className="wrapper--horizontal-center wrapper--profile-img animated fadeInUp"
                src={profileMePng}
                alt="Profile Me"
              />
            </Col>
            <Col lg="6" className="wrapper--vertical-center animated fadeIn">
              <HeaderContainer
                headerTitle="Who Am I ?"
              />
              <p>
                Passionate Coders. Coding for Society. Deep interests in learning machine learning
                and building system with Python and Node.js as the foundation of back-end. Love
                reading books while taking a break of coding so much
              </p>
            </Col>
          </Row>
        </Container>

        <FollowMe/>

      </Jumbotron>
    );
  }
}

export default Introduction;
