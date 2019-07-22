import * as React from 'react';
import { css } from 'aphrodite';
import { Box, Column, Divider, Heading, Icon, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import FooterStyles from '../../styles/FooterStyles';

import IMe from '../../custom/interface/IMe';

interface IProps {
  me: IMe;
}

interface IState {
  height: number;
}

class Footer extends React.Component<IProps, IState> {
  footerRef: any;

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentDidMount(): void {
    const height = this.footerRef.clientHeight;
    this.setState({
      height,
    });
  }

  render() {
    const { me } = this.props;
    const { height } = this.state;
    return (
      <div style={{ height: `${height}px` }}>
        <div
          ref={(footerEl) => {
            this.footerRef = footerEl;
          }}
          className={css(FooterStyles.footerContainer)}
        >
          <Box display="flex" direction="row" justifyContent="center" paddingX={3} paddingY={6}>
            <Column span={4}>
              <Box display="flex" direction="row" alignItems="center" paddingX={9}>
                <Box marginRight={1} padding={1}>
                  <Icon icon="face-smiley" size={24} accessibilityLabel="Contact" color="white" />
                </Box>
                <Text size="xl" color="white" bold>
                  Contact Us
                </Text>
              </Box>
              <Box display="flex" direction="column" paddingX={9} marginTop={3}>
                <Box paddingY={1}>
                  <Text size="md" color="gray" bold>
                    {me.phone}
                  </Text>
                </Box>
                <Box paddingY={1}>
                  <Text size="md" color="gray" bold>
                    {me.email}
                  </Text>
                </Box>
              </Box>
            </Column>
            <Column span={4}>
              <Box display="flex" direction="row" alignItems="center" paddingX={9}>
                <Box marginRight={1} padding={1}>
                  <Icon icon="globe-checked" size={24} accessibilityLabel="Contact" color="white" />
                </Box>
                <Text size="xl" color="white" bold>
                  Address
                </Text>
              </Box>
              <Box display="flex" direction="column" paddingX={9} marginTop={3}>
                <Box paddingY={1}>
                  <Text size="md" color="gray" bold>
                    {me.address}
                  </Text>
                </Box>
              </Box>
            </Column>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" paddingY={3}>
            <Text color="white" bold>
              Build with
            </Text>
            <Box marginLeft={1} marginRight={1} padding={1}>
              <Icon accessibilityLabel="Heart" icon="heart" color="white" size={21} />
            </Box>
            <Text color="white" bold>
              Copyright &copy; 2019 by Dito Hafizh
            </Text>
          </Box>
        </div>
      </div>
    );
  }
}

export default Footer;
