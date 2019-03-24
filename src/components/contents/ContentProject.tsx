import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

import '../../styles/CardContainer.css';
import IProject from '../../custom/interface/IProject';

interface Props {
  project: IProject;
}

const contentProject: React.FunctionComponent<Props> = ({ project }) => {
  const stacks = project.techStacks
    ? project.techStacks.join(', ')
    : 'Default Stacks';

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
            style={{ cursor: 'default' }}
          >{project.role}
          </Button>
        </CardSubtitle>
        <CardTitle className="card-container__btn-subtitle">
          <strong>Tech Stacks:&nbsp;</strong>{ stacks }
        </CardTitle>
        <CardText className="card-container__text">{project.description}</CardText>
        <CardText>
          <Button color="link">
            <a href={project.link} target="_blank" style={{ fontWeight: 600 }}>
              Read More...
            </a>
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default contentProject;
