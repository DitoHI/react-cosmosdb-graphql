import * as React from 'react';
import { Avatar, Box, Card, Column, Heading, Image, Mask, Spinner, Text, Touchable } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { Route } from 'react-router';

import types, { IS_LG, IS_SM } from '../../../custom/types';

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
        <Box key={tag} paddingY={1} smPaddingY={1} paddingX={2} marginRight={1} smMarginTop={1}>
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
      <Box display="flex" direction="row" wrap>
        <Column span={12} lgSpan={4}>
          <Box paddingX={3} height="100%">
            <Box
              display="flex"
              height="100%"
              direction="row"
              color={bgColor as any}
              shape={IS_LG ? 'rounded' : 'roundedTop'}
              smPadding={6}
              paddingX={4}
              paddingY={2}
              alignItems={IS_SM ? 'center' : 'start'}
              wrap
            >
              <Column span={3} smSpan={4}>
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
                        <Text color="white" size="sm" mdSize="md" inline>
                          by
                        </Text>{' '}
                        <Text color="white" size="sm" mdSize="md" bold inline>
                          {user.name}
                        </Text>
                      </Box>
                    </Touchable>
                  </Card>
                </Box>
              </Column>
              <Column span={9} smSpan={8}>
                <Box paddingX={3}>
                  <Box paddingY={2} smDisplay="block" display="none">
                    <Heading size="xs" color="white">
                      {blog.quote}
                    </Heading>
                  </Box>
                  <Box marginBottom={1} smDisplay="none" display="block">
                    <Text color="white" bold>
                      {blog.quote}
                    </Text>
                  </Box>

                  <Box smDisplay="flex" display="none" direction="row" wrap>
                    {this.renderTags(blog.tags)}
                  </Box>
                </Box>
              </Column>

              <Box display="flex" smDisplay="none" direction="row" wrap>
                {this.renderTags(blog.tags)}
              </Box>
            </Box>
          </Box>
        </Column>
        <Column span={12} lgSpan={8}>
          <Box paddingX={3} height="100%">
            <Route
              render={({ history }) => (
                <Touchable
                  onTouch={() => {
                    history.push(`/blog/${blog.titleDash}`);
                  }}
                >
                  <Card>
                    <Box
                      display="flex"
                      height="100%"
                      direction="row"
                      shape={IS_LG ? 'rounded' : 'roundedBottom'}
                      color="white"
                      smPadding={6}
                      paddingX={4}
                      paddingY={2}
                      alignItems="center"
                      wrap
                    >
                      <Column span={12} smSpan={7}>
                        <Box paddingX={1} smPaddingX={3}>
                          <Box
                            display="flex"
                            smDisplay="none"
                            height="100%"
                            justifyContent="center"
                            alignItems="center"
                            marginTop={3}
                          >
                            <Mask
                              shape="rounded"
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
                          <Box
                            display="none"
                            smDisplay="inlineBlock"
                            paddingX={4}
                            paddingY={1}
                            color="blue"
                          >
                            <Text color="white" bold size="xs" mdSize="md">
                              {blog.tags[0]}
                            </Text>
                          </Box>
                          <Box paddingY={4}>
                            <Box display="none" smDisplay="block">
                              <Heading size="xs">{blog.title}</Heading>
                            </Box>
                            <Box display="block" smDisplay="none">
                              <Text size="lg" bold>
                                {blog.title}
                              </Text>
                            </Box>
                          </Box>
                          <Box>
                            <Text color="gray" size="sm" mdSize="lg">
                              {blog.contentPreview}
                            </Text>
                          </Box>
                        </Box>
                      </Column>
                      <Box column={5} display="none" smDisplay="block">
                        <Box
                          display="flex"
                          height="100%"
                          justifyContent="center"
                          alignItems="center"
                        >
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
                      </Box>
                    </Box>
                  </Card>
                </Touchable>
              )}
            />
          </Box>
        </Column>
      </Box>
    );
  }
}

export default BlogPreview;
