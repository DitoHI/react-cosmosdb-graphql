import * as React from 'react';
import { Jumbotron , Container, Row, Col } from 'reactstrap';

import './../styles/Introduction.css';
import './../styles/Main.css';
import profileMePng from '../images/profileMe.png';

import FollowMe from './FollowMe';

class Introduction extends React.Component {
  render() {
    return (
      <Jumbotron className="wrapper--introduction">
        <Container className="wrapper--padding-top-bottom-20">
          <Row>
            <Col lg="6">
              <img
                className="wrapper--horizontal-center wrapper--profile-img"
                src={profileMePng}
                alt="Profile Me"
              />
            </Col>
            <Col lg="6" className="wrapper--vertical-center">
              <h3>Who Am I ?</h3>
              <hr
                className="wrapper--divider"
                style={{ marginTop: '30px', marginBottom: '30px', width: '40%' }}
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
