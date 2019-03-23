import * as React from 'react';

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
          style={{ marginTop: '20px', marginBottom: '20px', width: '40%' }}
        />
      </div>
    );
  };

headerContainer.defaultProps = {
  headerContainerStyle: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
  headerTextStyle: {
    color: '#e00303ff',
    fontWeight: '600',
    fontSize: '28px',
    maxWidth: '700px',
  },
};

export default headerContainer;
