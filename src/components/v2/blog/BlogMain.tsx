import * as React from 'react';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import { IBlog, IMe } from '../../../custom/interface';

import fixtures from '../../../test/fixtures';

import BlogHeader from './BlogHeader';
import BlogPreview from './BlogPreview';

interface IProps {
  user: IMe;
}

class BlogMain extends React.Component<IProps, {}> {
  render() {
    const { user } = this.props;
    return (
      <Box>
        <Box padding={12}>
          <BlogHeader blogs={Array.of<IBlog>(fixtures.blog, fixtures.blog, fixtures.blog)} />
          <Box paddingY={6} />
        </Box>
        <Box paddingX={9}>
          <BlogPreview blog={fixtures.blog} user={user} />
        </Box>
        <Box paddingY={6} />
      </Box>
    );
  }
}

export default BlogMain;
