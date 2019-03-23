import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

import '../styles/CardContainer.css';
import IProject from '../custom/interface/IProject';

interface Props {
  project: IProject;
}

const projectContent: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Card>
      <CardBody
        className="card-container card-container-fixed-flex"
      >
        <CardTitle className="card-container__title">
          {project.name}
        </CardTitle>
        <CardSubtitle
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button
            color="danger"
            outline
            className="wrapper--btn-outline-radius"
          >{project.role}
          </Button>
        </CardSubtitle>
        <CardText className="card-container__text">{project.description}</CardText>
        <CardText>
          <Button color="link">
            <a href={ project.link } target="_blank" style={{ fontWeight: 600 }}>
              Read More...
            </a>
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default projectContent;
