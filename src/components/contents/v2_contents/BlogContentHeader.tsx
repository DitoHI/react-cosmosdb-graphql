import * as React from 'react';
import { Box, Column, IconButton, Text, Touchable } from 'gestalt';

class BlogContentHeader extends React.Component {
  render() {
    return (
      <Box display="flex" direction="row" color="white" padding={3} alignItems="center">
        <Column span={3} />
        <Column span={2}>
          <Touchable onTouch={() => {}}>
            <Box display="flex" direction="row" justifyContent="center" alignItems="center">
              <IconButton
                accessibilityLabel="prev"
                bgColor="white"
                icon="arrow-back"
                iconColor="gray"
                onClick={() => {}}
                size="xs"
              />
              <Box paddingX={2}>
                <Text bold color="gray" inline>
                  PREV
                </Text>
              </Box>
            </Box>
          </Touchable>
        </Column>
        <Column span={2}>
          <Touchable onTouch={() => {}}>
            <Box display="flex" direction="row" justifyContent="center" alignItems="center">
              <IconButton
                accessibilityLabel="menu"
                bgColor="white"
                icon="view-type-dense"
                iconColor="gray"
                onClick={() => {}}
                size="xs"
              />
              <Box paddingX={2}>
                <Text bold color="gray" inline>
                  BACK TO MENU
                </Text>
              </Box>
            </Box>
          </Touchable>
        </Column>
        <Column span={2}>
          <Touchable onTouch={() => {}}>
            <Box display="flex" direction="row" justifyContent="center" alignItems="center">
              <Box>
                <Text bold color="gray" inline>
                  NEXT
                </Text>
              </Box>
              <Box paddingX={2}>
                <IconButton
                  accessibilityLabel="prev"
                  bgColor="white"
                  icon="arrow-forward"
                  iconColor="gray"
                  onClick={() => {}}
                  size="xs"
                />
              </Box>
            </Box>
          </Touchable>
        </Column>
      </Box>
    );
  }
}

export default BlogContentHeader;
