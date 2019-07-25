import * as React from 'react';
import { Box, Column, Heading, Image, Mask, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import types from '../../../custom/types';

import IBlog from '../../../custom/interface/IBlog';

import Colors from '../../../styles/Colors';

interface IProps {
  blog: IBlog;
}

class BlogPreview extends React.Component<IProps, {}> {
  render() {
    const { blog } = this.props;
    return (
      <Box display="flex" direction="row" alignItems="center">
        <Column span={6} smSpan={8}>
          <Box display="flex" direction="row" shape="rounded" color="white" padding={6}>
            <Column span={7}>
              <Box paddingX={3}>
                <Box display="inlineBlock" paddingX={4} paddingY={1} color="blue" shape="rounded">
                  <Text color="white" bold>
                    {blog.tags[0]}
                  </Text>
                </Box>
                <Box paddingY={4}>
                  <Heading size="xs">{blog.title}</Heading>
                </Box>
                <Box>
                  <Text color="gray" size="lg">
                    {blog.contentPreview}
                  </Text>
                </Box>
              </Box>
            </Column>
            <Column span={5}>
              <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                <Mask
                  shape="circle"
                  height={types.DEFAULT_BLOG_PREVIEW_CONTENT_BANNER.height}
                  width={types.DEFAULT_BLOG_PREVIEW_CONTENT_BANNER.width}
                >
                  <Image
                    alt={blog.title}
                    color={Colors.youngBlue}
                    src={blog.blobUri}
                    naturalHeight={1}
                    naturalWidth={1}
                    fit="cover"
                  />
                </Mask>
              </Box>
            </Column>
          </Box>
        </Column>
      </Box>
    );
  }
}

export default BlogPreview;
