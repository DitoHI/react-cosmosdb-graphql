import * as React from 'react';
import { Box, Column, IconButton, Text, Touchable } from 'gestalt';

import { IBlog } from '../../../custom/interface';
import types from '../../../custom/types';

interface IProps {
  prevBlog: IBlog;
  nextBlog: IBlog;
}

class BlogContentHeader extends React.Component<IProps, {}> {
  render() {
    const { prevBlog, nextBlog } = this.props;
    return (
      <Box display="flex" direction="row" color="white" padding={3} alignItems="start">
        <Column span={3} />
        <Column span={2}>
          <Touchable onTouch={() => {}}>
            <Box justifyContent="start">
              <Box display="flex" direction="row" alignItems="center">
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
              <Box paddingY={1} maxWidth={types.DEFAULT_WIDTH_TITLE_ONE}>
                <Text size="xs" color="gray" bold truncate>
                  {prevBlog.titlePreview}
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
            <Box justifyContent="start">
              <Box display="flex" direction="row" alignItems="center">
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
              <Box paddingY={1} maxWidth={types.DEFAULT_WIDTH_TITLE_ONE}>
                <Text size="xs" color="gray" bold truncate>
                  {nextBlog.titlePreview}
                </Text>
              </Box>
            </Box>
          </Touchable>
        </Column>
      </Box>
    );
  }
}

export default BlogContentHeader;
