import * as React from 'react';
import { Badge, Container } from 'reactstrap';
import NotFoundPageStyle from '../styles/NotFoundPageStyle';
import { css } from 'aphrodite';

const errorPath = () => {
  return (
    <Container>
      <h1 className={css(NotFoundPageStyle.notFoundWrapper)}>
        Not Found Page <Badge color="secondary">404</Badge>
      </h1>
    </Container>
  );
};

export default errorPath;
