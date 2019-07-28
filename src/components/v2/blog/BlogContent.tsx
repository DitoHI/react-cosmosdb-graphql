import * as React from 'react';
import { Box } from 'gestalt';
import BlogContentHeader from '../../contents/v2_contents/BlogContentHeader';

import 'gestalt/dist/gestalt.css';

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
        <BlogContentHeader />
      </Box>
    );
  }
}

export default BlogContent;
