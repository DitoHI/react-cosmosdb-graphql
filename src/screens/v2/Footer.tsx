import * as React from 'react';
import { css } from 'aphrodite';
import { Box, Column, Divider, Heading, Icon, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import FooterStyles from '../../styles/FooterStyles';

import IMe from '../../custom/interface/IMe';

interface IProps {
  me: IMe;
}

class Footer extends React.Component<IProps, {}> {
  footerRef: any;

  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    const height = this.footerRef.clientHeight;
    this.footerRef.style.height = `${height}px`;
  }

  render() {
    const { me } = this.props;
    return (
      <div
        ref={(footerEl) => {
          this.footerRef = footerEl;
        }}
        className={css(FooterStyles.footerContainer)}
      >
        <Box
          display="flex"
          direction="row"
          justifyContent="center"
          smPaddingX={3}
          smPaddingY={6}
          paddingY={2}
          wrap
        >
          <Column span={12} smSpan={4}>
            <Box display="flex" direction="row" alignItems="center" paddingX={9}>
              <Box marginRight={1} padding={1}>
                <Icon icon="face-smiley" size={24} accessibilityLabel="Contact" color="white" />
              </Box>
              <Text mdSize="lg" color="white" bold>
                Contact Us
              </Text>
            </Box>
            <Box display="flex" direction="column" paddingX={9} marginTop={1} smMarginTop={3}>
              <Box paddingY={1}>
                <Text size="sm" color="gray" bold>
                  {me.phone}
                </Text>
              </Box>
              <Box paddingY={1}>
                <Text size="sm" color="gray" bold>
                  {me.email}
                </Text>
              </Box>
            </Box>
          </Column>
          <Column span={12} smSpan={4}>
            <Box
              display="flex"
              direction="row"
              alignItems="center"
              paddingX={9}
              marginTop={2}
              smMarginTop={0}
            >
              <Box marginRight={1} padding={1}>
                <Icon icon="globe-checked" size={24} accessibilityLabel="Contact" color="white" />
              </Box>
              <Text mdSize="lg" color="white" bold>
                Address
              </Text>
            </Box>
            <Box display="flex" direction="column" paddingX={9} marginTop={1} smMarginTop={3}>
              <Box paddingY={1}>
                <Text size="sm" color="gray" bold>
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
          <Text size="sm" color="white" bold>
            Copyright &copy; 2019 by Dito Hafizh
          </Text>
        </Box>
      </div>
    );
  }
}

export default Footer;
