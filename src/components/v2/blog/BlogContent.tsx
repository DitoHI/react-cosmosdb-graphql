import * as React from 'react';
import { Box, Divider, Sticky } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import BlogContentDetail from '../../contents/v2_contents/BlogContentDetail';
import BlogContentHeader from '../../contents/v2_contents/BlogContentHeader';
import fixtures from '../../../test/fixtures';

interface IProps {
  match: any;
}

class BlogContent extends React.Component<IProps, {}> {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <Box padding={12}>
        <Box color="white" shape="rounded">
          <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 99 } as any}>
            <BlogContentHeader prevBlog={fixtures.blog} nextBlog={fixtures.blog} />
            <Divider />
          </Sticky>
          <BlogContentDetail blog={fixtures.blog} user={fixtures.user} />
        </Box>
      </Box>
    );
  }
}

export default BlogContent;
