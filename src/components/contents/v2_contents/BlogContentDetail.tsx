import * as React from 'react';
import {
  Avatar,
  Box,
  Column,
  Divider,
  Heading,
  Icon,
  IconButton,
  Image,
  Mask,
  Sticky,
  Text,
} from 'gestalt';
import { css } from 'aphrodite';
import 'gestalt/dist/gestalt.css';
import * as moment from 'moment';

import { IBlog, IMe } from '../../../custom/interface';
import types from '../../../custom/types';
import BlogStyle from '../../../styles/blog/BlogStyle';
import Colors from '../../../styles/Colors';

interface IProps {
  user: IMe;
  blog: IBlog;
}

class BlogContentDetail extends React.Component<IProps, {}> {
  renderTags() {
    const { blog } = this.props;
    return blog.tags.map((tag) => {
      return (
        <Box paddingX={2} marginRight={3} color="blue">
          <Text color="white" size="xs" bold>
            {tag}
          </Text>
        </Box>
      );
    });
  }

  render() {
    const { blog, user } = this.props;
    return (
      <Box padding={12}>
        <Box display="flex" direction="row" justifyContent="center">
          {this.renderTags()}
        </Box>
        <Box paddingX={3} paddingY={6} justifyContent="center">
          <Heading>{blog.title}</Heading>
        </Box>
        <Box display="flex" paddingX={3} alignItems="center">
          <Icon accessibilityLabel="time" icon="clock" />
          <Box padding={2}>
            <Text size="sm" color="gray" bold inline>
              {moment(blog.lastEdited).format('LLLL')}
            </Text>
          </Box>
        </Box>
        <Box paddingY={3}>
          <Divider />
        </Box>
        <Box display="flex" paddingX={3} paddingY={6}>
          <Column span={12} smSpan={3}>
            <Sticky top={types.DEFAULT_TOP_LG}>
              <Box display="flex" direction="column" justifyContent="center" alignItems="center">
                <Mask
                  shape="circle"
                  height={types.DEFAULT_BLOG_PREVIEW_USER_AVA.height}
                  width={types.DEFAULT_BLOG_PREVIEW_USER_AVA.width}
                >
                  <Image
                    alt={user.name}
                    color={Colors.youngBlue}
                    src={user.blobUri!}
                    naturalHeight={1}
                    naturalWidth={1}
                    fit="cover"
                  />
                </Mask>
                <Box paddingX={2} paddingY={4}>
                  <Text bold>{user.name}</Text>
                </Box>
                <Box display="flex" direction="column" alignItems="center">
                  <IconButton
                    accessibilityLabel="Love"
                    bgColor="white"
                    icon="face-smiley"
                    iconColor="blue"
                    size="xl"
                    onClick={() => {}}
                  />
                  <Text color="blue" size="xs" bold>
                    75 Views
                  </Text>
                </Box>
              </Box>
            </Sticky>
          </Column>
          <Column span={12} smSpan={9}>
            <Box marginBottom={3}>
              <Heading size="xs" color="darkGray">
                {blog.quote}
              </Heading>
            </Box>
            <Box marginBottom={6}>
              <Divider />
            </Box>
            <div
              className={css(BlogStyle.blogItemContentTextDesc)}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </Column>
        </Box>
      </Box>
    );
  }
}

export default BlogContentDetail;
