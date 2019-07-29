import * as React from 'react';
import { Box, Column, IconButton, Text, Touchable } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { Query } from 'react-apollo';
import { Placeholder } from 'semantic-ui-react';

import { IBlog } from '../../../custom/interface';
import blogsQuery from '../../../graphql/queries/queries_v2/blogsQuery';
import { getBlogByPosition } from '../../../schemaTypes';

interface IProps {
  blog: IBlog;
  loading: boolean;
}

class BlogContentHeader extends React.Component<IProps, {}> {
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
        alignItems="start"
      >
        <Column span={4}>
          <Box justifyContent="start" height="100%">
            <Touchable onTouch={() => {}}>
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
              <Box paddingY={1} maxWidth="100%">
                {this.renderTitlePreviewPlaceholder()}
                {/*{blog && (*/}
                {/*  <Query<getBlogByPosition>*/}
                {/*    query={blogsQuery.getBlobByPositionIndex}*/}
                {/*    variables={{ index: blog.positionIndex, operator: '-' }}*/}
                {/*  >*/}
                {/*    {({ loading, error, data }) => {*/}
                {/*      return (*/}
                {/*        <Text size="xs" color="gray" bold truncate>*/}
                {/*          {blog && blog.title}*/}
                {/*        </Text>*/}
                {/*      );*/}
                {/*    }}*/}
                {/*  </Query>*/}
                {/*)}*/}
              </Box>
            </Touchable>
          </Box>
        </Column>
        <Column span={4}>
          <Touchable onTouch={() => {}} fullHeight>
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
              <Box paddingX={2}>
                <Text bold color="gray" inline>
                  BACK TO MENU
                </Text>
              </Box>
            </Box>
          </Touchable>
        </Column>
        <Column span={4}>
          <Box justifyContent="start" height="100%">
            <Touchable onTouch={() => {}}>
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
              <Box paddingY={1} maxWidth="100%">
                <Text size="xs" color="gray" bold truncate>
                  {blog && blog.title}
                </Text>
              </Box>
            </Touchable>
          </Box>
        </Column>
      </Box>
    );
  }
}

export default BlogContentHeader;
