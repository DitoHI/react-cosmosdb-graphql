import * as React from 'react';
import { Badge, Container } from 'reactstrap';
import { css } from 'aphrodite';

// custom styles
import MainStyle from '../styles/MainStyle';
import NotFoundPageStyle from '../styles/NotFoundPageStyle';

interface IProps {
  text: string;
  statusCode: number;
  icon?: any;
}

const errorPath: React.FunctionComponent<IProps> = ({ text, statusCode, icon }) => {
  return (
    <Container className={css(MainStyle.mainFlexColumnWrapper)}>
      <h1 className={css(NotFoundPageStyle.notFoundWrapper)}>
        {text}&nbsp;<Badge color="secondary">{statusCode}</Badge>
      </h1>
      <img className={css(NotFoundPageStyle.notFoundIcon)} src={icon} alt="Error" />
    </Container>
  );
};

export default errorPath;
