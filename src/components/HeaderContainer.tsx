import * as React from 'react';

interface Props {
  headerContainerStyle?: any;
  headerTitle: string;
  headerTextStyle?: any;
  headerDividerStyle?: any;
}

const headerContainer: React.FunctionComponent<Props> =
  ({ headerContainerStyle, headerTitle, headerTextStyle, headerDividerStyle }) => {
    return (
      <div style={ {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        ...headerContainerStyle,
      } }>
        <h3 style={ {
          color: '#e00303ff',
          fontWeight: '600',
          fontSize: '28px',
          maxWidth: '700px',
          ...headerTextStyle,
        } }>{headerTitle}</h3>
        <hr
          className="wrapper--divider"
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            width: '40%',
            ...headerDividerStyle,
          }}
        />
      </div>
    );
  };

export default headerContainer;
