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
  loading: boolean;
}

interface IState {
  activeBlog: number;
}

class BlogHeader extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeBlog: 0,
    };
  }

  renderBannerPlaceholder() {
    const {} = this.state;
    return (
      <Box
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="start"
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
      <Box paddingY={5} paddingX={3}>
        {Array.from(Array(2).keys()).map((i: number) => (
          <Box key={`top_stories_placeholder${i}`} paddingY={1}>
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
        ))}
      </Box>
    );
  }

  renderStoryCard() {
    const { blogs } = this.props;
    return blogs.map((blog: IBlog, index: number) => {
      return (
        <Touchable
          onTouch={() => {
            this.setState({
              activeBlog: index,
            });
          }}
          shape="rounded"
          key={index}
        >
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
                  <Box padding={1}>
                    <Text>{blog.titlePreview}</Text>
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
      <Box
        display="flex"
        direction="column"
        color="white"
        overflow="auto"
        height={types.DEFAULT_BLOG_CONTAINER_SIZE.height}
        alignItems="center"
      >
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
    const { activeBlog } = this.state;
    return (
      <Box position="relative" height={types.DEFAULT_BLOG_CONTAINER_SIZE.height}>
        <Image
          alt={blogs[activeBlog].title}
          color="pine"
          src={blogs[activeBlog].blobUri}
          fit="cover"
          naturalHeight={1}
          naturalWidth={1}
        >
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%', width: '100%' }} />
        </Image>
        <Box padding={8} position="absolute" left bottom>
          <Heading color="white" size="sm">
            {blogs[activeBlog].title}
          </Heading>
        </Box>
      </Box>
    );
  }

  render() {
    const { loading } = this.props;
    return (
      <Box display="flex" direction="row" color="white" overflow="hidden" shape="rounded">
        <Column span={8}>{loading ? this.renderBannerPlaceholder() : this.renderBanner()}</Column>
        <Column span={4}>
          {loading ? this.renderStoriesPlaceholder() : this.renderTopStories()}
        </Column>
      </Box>
    );
  }
}

export default BlogHeader;
