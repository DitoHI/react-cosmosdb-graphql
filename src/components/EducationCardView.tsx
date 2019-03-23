import * as React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import * as dateFormat from 'dateformat';

import '../styles/Main.css';
import '../styles/CardContainer.css';
import IEducation from '../custom/interface/IEducation';

interface Props {
  education: IEducation;
  icon: string;
}

const educationCardView: React.FunctionComponent<Props> =
  ({ education, icon }) => {
    return (
      <Row>
        <Col sm="7">
          <Card>
            <CardBody className="card-container">
              <CardTitle className="card-container__title">
                { education.name }
              </CardTitle>
              <CardSubtitle
                style={ { display: 'flex', justifyContent: 'center' } }
              >
                <Button
                  color="danger"
                  outline
                  className="wrapper--btn-outline-radius"
                >
                  { education.major } <Badge color="danger">{ education.degree }</Badge>
                </Button>
              </CardSubtitle>
              <CardTitle className="card-container__btn-subtitle">{ education.location }</CardTitle>
              <CardText className="card-container__text">{ education.description }</CardText>
              <CardText className="card-container__text">
                <Button color="danger" outline className="wrapper--btn-outline-radius">
                  { dateFormat(education.dateStart, 'mmm yyyy') }
                  &nbsp;-&nbsp;
                  { dateFormat(education.dateEnd, 'mmm yyyy') }
                </Button>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="5" className="wrappper--column-center-all">
          <img
            alt={ icon }
            src={ require(`../images/education/${ icon }`) }
            className="wrapper--icon-card"
          />
        </Col>
      </Row>
    );
  };

export default educationCardView;
