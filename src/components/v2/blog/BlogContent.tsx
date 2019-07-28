import * as React from 'react';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';

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
      <Box>
        <BlogContentHeader prevBlog={fixtures.blog} nextBlog={fixtures.blog} />
      </Box>
    );
  }
}

export default BlogContent;
