import * as React from 'react';
import { Box, Column, IconButton, Text, Touchable } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { Query } from 'react-apollo';
import { Placeholder } from 'semantic-ui-react';
import { Route } from 'react-router';

import { IBlog } from '../../../custom/interface';
import { IS_SM } from '../../../custom/types';

import blogsQuery from '../../../graphql/queries/queries_v2/blogsQuery';
import { getBlogByPosition } from '../../../schemaTypes';

import fixtures from '../../../test/fixtures';

interface IProps {
  blog: IBlog;
  loadingParent: boolean;
}

class BlogContentHeader extends React.Component<IProps, {}> {
  renderComingSoon(mode: 'left' | 'right' = 'left') {
    const {} = this.props;
    return (
      <Text size="xs" mdSize="md" color="gray" bold align={mode}>
        Coming Soon
      </Text>
    );
  }

  renderToucableNav(loading: boolean, blog, mode: 'start' | 'end' = 'start') {
    const { loadingParent } = this.props;
    return (
      <Route
        render={({ history }) => (
          <Touchable
            onTouch={() => {
              history.push(`/blog/${blog.id}`);
            }}
          >
            <Box display="flex" direction="row" alignItems="center" justifyContent={mode}>
              <IconButton
                accessibilityLabel="prev"
                bgColor="white"
                icon={mode === 'start' ? 'arrow-back' : 'arrow-forward'}
                iconColor="gray"
                onClick={() => {}}
                size="xs"
              />
              <Box paddingX={2}>
                <Text bold color="gray" inline size="sm" smSize="md">
                  {mode === 'start' ? 'Prev' : 'Next'}
                </Text>
              </Box>
            </Box>
            <Box paddingY={1} maxWidth="100%">
              {loading && loadingParent ? (
                this.renderTitlePreviewPlaceholder()
              ) : (
                <Text size="xs" color="gray" bold truncate>
                  {blog && blog.title}
                </Text>
              )}
            </Box>
          </Touchable>
        )}
      />
    );
  }

  renderTitlePreviewPlaceholder() {
    const {} = this.props;
    return (
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }

  render() {
    const { blog } = this.props;
    return (
      <Box
        shape="rounded"
        color="white"
        display="flex"
        direction="row"
        padding={3}
        alignItems={IS_SM ? 'start' : 'center'}
      >
        <Column span={4}>
          <Box justifyContent="start" height="100%">
            {blog && (
              <Query<getBlogByPosition>
                query={blogsQuery.getBlobByPositionIndex}
                variables={{ index: blog.positionIndex, operator: '-' }}
              >
                {({ loading, error, data }) => {
                  if (error || !data) {
                    return this.renderComingSoon();
                  }

                  const blog = data.getBlogByPositionIndex;
                  if (blog) {
                    return this.renderToucableNav(loading, blog);
                  }

                  return this.renderComingSoon();
                }}
              </Query>
            )}
          </Box>
        </Column>
        <Column span={4}>
          <Route
            render={({ history }) => (
              <Touchable
                onTouch={() => {
                  history.goBack();
                }}
                fullHeight
              >
                <Box
                  display="flex"
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <IconButton
                    accessibilityLabel="menu"
                    bgColor="white"
                    icon="view-type-dense"
                    iconColor="gray"
                    onClick={() => {}}
                    size="xs"
                  />
                  <Box paddingX={2} display="none" smDisplay="block">
                    <Text bold color="gray" inline>
                      BACK TO MENU
                    </Text>
                  </Box>
                </Box>
                <Box display="block" smDisplay="none">
                  <Text size="xs" bold color="gray" align="center">
                    Menu
                  </Text>
                </Box>
              </Touchable>
            )}
          />
        </Column>
        <Column span={4}>
          <Box display="flex" justifyContent="end" height="100%">
            {blog && (
              <Query<getBlogByPosition>
                query={blogsQuery.getBlobByPositionIndex}
                variables={{ index: blog.positionIndex, operator: '+' }}
              >
                {({ loading, error, data }) => {
                  if (error || !data) {
                    return this.renderComingSoon('right');
                  }

                  const blog = data.getBlogByPositionIndex;
                  if (blog) {
                    return this.renderToucableNav(loading, blog, 'end');
                  }

                  return this.renderComingSoon('right');
                }}
              </Query>
            )}
          </Box>
        </Column>
      </Box>
    );
  }
}

export default BlogContentHeader;
