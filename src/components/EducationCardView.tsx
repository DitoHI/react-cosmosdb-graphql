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
                {education.name}
              </CardTitle>
              <CardSubtitle>
                <Button
                  color="danger"
                  outline
                  className="card-container__btn-subtitle"
                  style={{ width: '100%' }}
                >
                  {education.major} <Badge color="danger">{education.degree}</Badge>
                </Button>
              </CardSubtitle>
              <CardTitle className="card-container__btn-subtitle">{education.location}</CardTitle>
              <CardText>{education.description}</CardText>
              <CardText>
                <Button color="danger" outline className="card-container__btn-subtitle">
                  {dateFormat(education.dateStart, 'mmm yyyy')}
                  &nbsp;-&nbsp;
                  {dateFormat(education.dateEnd, 'mmm yyyy')}
                </Button>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="5" className="wrappper--column-center-all">
          <img
            alt={ icon }
            src={require(`../images/${icon}`)}
            className="wrapper--icon-card"
          />
        </Col>
      </Row>
    );
  };

export default educationCardView;
