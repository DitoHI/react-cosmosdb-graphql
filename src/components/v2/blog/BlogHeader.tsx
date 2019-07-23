import * as React from 'react';
import { css } from 'aphrodite';
import { Box, Card, Column, Divider, Heading, Image, Text, Touchable } from 'gestalt';
import { Placeholder } from 'semantic-ui-react';
import 'gestalt/dist/gestalt.css';

import IBlog from '../../../custom/interface/IBlog';

import BlogStyle from '../../../styles/blog/BlogStyle';

import types from '../../../custom/types';

interface IProps {
  blogs: IBlog[];
}

class BlogHeader extends React.Component<IProps, {}> {
  renderBannerPlaceholder() {
    const {} = this.state;
    return (
      <Box
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        paddingY={6}
        height="100%"
      >
        <Placeholder className={css(BlogStyle.blogHeaderPlaceholderSize)}>
          <Placeholder.Image square />
        </Placeholder>
        <Placeholder className={css(BlogStyle.blogHeaderContentPlaceholderSize)}>
          <Placeholder.Header>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Box>
    );
  }

  renderStoriesPlaceholder() {
    const {} = this.state;
    return (
      <Box paddingY={2}>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Box>
    );
  }

  renderStoryCard() {
    const { blogs } = this.props;
    return blogs.map((blog: IBlog, index: number) => {
      return (
        <Touchable onTouch={() => {}} shape="rounded">
          <Box paddingY={2} shape="rounded" overflow="hidden">
            <Card>
              <Box display="flex" direction="row" alignItems="center">
                <Box shape="rounded" color={types.COLOR_TOP_STORIES[index] as any} padding={6}>
                  <Text size="xl" color="white" bold>
                    {index + 1}
                  </Text>
                </Box>
                <Box paddingX={1} />
                <Box paddingX={1}>
                  <Box padding={1}>
                    <Text size="lg" bold>
                      {blog.tags[0]}
                    </Text>
                  </Box>
                  <Box padding={1} maxWidth={350}>
                    <Text truncate>{blog.title}&#39;</Text>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Touchable>
      );
    });
  }

  renderTopStories() {
    const {} = this.state;
    return (
      <Box color="white" overflow="auto" height={types.DEFAULT_BLOG_CONTAINER_SIZE.height}>
        <Box paddingY={2} marginTop={3}>
          <Text size="lg" bold align="center">
            Top Stories
          </Text>
        </Box>
        <Divider />
        <Box paddingX={3}>{this.renderStoryCard()}</Box>
        <Box paddingY={2} />
      </Box>
    );
  }

  renderBanner() {
    const { blogs } = this.props;
    return (
      <Box position="relative" height={types.DEFAULT_BLOG_CONTAINER_SIZE.height}>
        <Image
          alt={blogs[0].title}
          color="pine"
          src={blogs[0].blobUri}
          fit="cover"
          naturalHeight={1}
          naturalWidth={1}
        >
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%', width: '100%' }} />
        </Image>
        <Box padding={8} position="absolute" left bottom>
          <Heading color="white" size="sm">
            {blogs[0].title}
          </Heading>
        </Box>
      </Box>
    );
  }

  render() {
    return (
      <Box display="flex" direction="row" color="white" overflow="hidden" shape="rounded">
        <Column span={8}>{this.renderBanner()}</Column>
        <Column span={4}>{this.renderTopStories()}</Column>
      </Box>
    );
  }
}

export default BlogHeader;
