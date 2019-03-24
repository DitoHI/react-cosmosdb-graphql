import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

import HeaderContainer from '../components/HeaderContainer';

import { IoIosCall, IoIosPin, IoIosMail, IoIosHeart } from 'react-icons/io';
import IMe from '../custom/interface/IMe';
import '../styles/Footer.css';

interface Props {
  me: IMe;
}

const footer: React.FunctionComponent<Props> = ({ me }) => {
  return (
    <Container className="animated fadeIn">
      <HeaderContainer
        headerTitle="Contact Me"
        headerTextStyle={{
          color: '#111',
          fontWeight: '600',
          fontSize: '28px',
        }}
        headerDividerStyle={{
          borderBottomColor: '#111',
        }}
      >
      </HeaderContainer>
      <Row>
        <Col sm={{ size: 6, offset: 2 }}>
          <div className="footer__content-info">
            <IoIosPin/>&nbsp;
            <span>{ me.address }</span>
          </div>
          <div className="footer__content-info">
            <IoIosCall/>&nbsp;
            <span>{ me.phone }</span>
          </div>
          <div className="footer__content-info">
            <IoIosMail/>&nbsp;
            <span>{ me.email }</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="footer__content-info" style={{ fontSize: '14px', fontWeight: 800 }}>
            <span>Copyright&nbsp;&copy;&nbsp;Dito Hafizh Indriarto 2019.</span>&nbsp;
            <span>Build with&nbsp;<IoIosHeart/>&nbsp;in React.</span>&nbsp;
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
