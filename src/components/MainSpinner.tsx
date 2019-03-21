import * as React from 'react';
import * as Spinner from 'react-spinkit';

interface Props {
  name: any;
  color: string;
  style?: any;
}

const mainSpinner = (props: Props): JSX.Element => {
  const { color, name, style } = props;
  const defaultStyle = {
    marginTop: '50px',
    marginBottom: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  return (
    <Spinner
      name={ name }
      color={ color }
      style={{ ...defaultStyle, ...style }}
    />);
};

export default mainSpinner;
