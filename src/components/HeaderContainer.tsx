import * as React from 'react';
import { Container } from 'reactstrap';

interface Props {
  headerContainerStyle?: any;
  headerTitle: string;
  headerTextStyle?: any;
}

const headerContainer: React.FunctionComponent<Props> =
  ({ headerContainerStyle, headerTitle, headerTextStyle }) => {
    return (
      <div style={headerContainerStyle}>
        <h3 style={headerTextStyle}>{headerTitle}</h3>
        <hr
          className="wrapper--divider"
          style={{ marginTop: '30px', marginBottom: '30px', width: '40%' }}
        />
      </div>
    );
  };

export default headerContainer;
