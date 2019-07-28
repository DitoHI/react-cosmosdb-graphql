import * as React from 'react';
import { Avatar, Box, Card, Column, Heading, Image, Mask, Spinner, Text, Touchable } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { Route } from 'react-router';

import types from '../../../custom/types';

import IMe from '../../../custom/interface/IMe';
import IBlog from '../../../custom/interface/IBlog';

import Colors from '../../../styles/Colors';

interface IProps {
  blog: IBlog;
  user: IMe;
  bgColor: string;
}

class BlogPreview extends React.Component<IProps, {}> {
  renderTags(tags: string[]) {
    const {} = this.props;
    return tags.map((tag) => {
      return (
        <Box key={tag} paddingY={1} paddingX={2} marginRight={1} marginTop={1}>
          <Card>
            <Text size="xs" color="white" bold>
              {tag}
            </Text>
          </Card>
        </Box>
      );
    });
  }

  render() {
    const { bgColor, blog, user } = this.props;

    return (
      <Box display="flex" direction="row">
        <Column span={6} smSpan={4}>
          <Box paddingX={3} height="100%">
            <Box
              display="flex"
              height="100%"
              direction="row"
              color={bgColor as any}
              shape="rounded"
              padding={6}
              alignItems="center"
            >
              <Column span={4}>
                <Box
                  display="flex"
                  direction="column"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                  paddingX={3}
                >
                  <Card>
                    <Touchable onTouch={() => {}}>
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
                      <Box paddingY={2}>
                        <Text color="white" inline>
                          by
                        </Text>{' '}
                        <Text color="white" bold inline>
                          {user.name}
                        </Text>
                      </Box>
                    </Touchable>
                  </Card>
                </Box>
              </Column>
              <Column span={8}>
                <Box paddingX={3}>
                  <Box paddingY={2}>
                    <Heading size="xs" color="white">
                      {blog.quote}
                    </Heading>
                  </Box>

                  <Box display="flex" direction="row" wrap>
                    {this.renderTags(blog.tags)}
                  </Box>
                </Box>
              </Column>
            </Box>
          </Box>
        </Column>
        <Column span={6} smSpan={8}>
          <Box paddingX={3} height="100%">
            <Box
              display="flex"
              height="100%"
              direction="row"
              shape="rounded"
              color="white"
              padding={6}
              alignItems="center"
            >
              <Column span={7}>
                <Card>
                  <Box paddingX={3}>
                    <Box display="inlineBlock" paddingX={4} paddingY={1} color="blue">
                      <Text color="white" bold>
                        {blog.tags[0]}
                      </Text>
                    </Box>
                    <Box paddingY={4}>
                      <Route
                        render={({ history }) => (
                          <Touchable
                            onTouch={() => {
                              history.push(`/blog/${blog.id}`);
                            }}
                          >
                            <Heading size="xs">{blog.title}</Heading>
                          </Touchable>
                        )}
                      />
                    </Box>
                    <Box>
                      <Text color="gray" size="lg">
                        {blog.contentPreview}
                      </Text>
                    </Box>
                  </Box>
                </Card>
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
          </Box>
        </Column>
      </Box>
    );
  }
}

export default BlogPreview;
