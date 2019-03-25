import * as React from 'react';
import { Container } from 'reactstrap';

interface Props {
  containerImg: any;
  contentText: string;
}

const homeSpinner: React.FunctionComponent<Props> = ({ containerImg, contentText }) => {
  const containerStyle = {
    margin: 'auto',
    display: 'flex',
    flexFlow: 'column wrap',
    width: '200px',
    height: '400px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentTextStyle = {
    fontWeight: 600,
    fontSize: '1rem',
    color: '#413c54',
    textAlign: 'center' as 'center',
  };

  return (
    <Container style={ containerStyle }>
      <img
        src={ containerImg }
        alt="Home Spinner"
      />
      <div style={ contentTextStyle }>{ contentText }</div>
    </Container>
  );
};

export default homeSpinner;
