import * as React from 'react';
import { css } from 'aphrodite';
import { Box } from 'gestalt';
import { ChildProps } from 'react-apollo';
import 'gestalt/dist/gestalt.css';

import { IBlog } from '../../custom/interface';

import BlogStyle from '../../styles/blog/BlogStyle';

import BlogPreview from '../../components/v2/blog/BlogPreview';
import BlogHeader from '../../components/v2/blog/BlogHeader';

import fixtures from '../../test/fixtures';

interface IProps {
  parentStyle?: any;
}

class Blog extends React.Component<ChildProps<IProps>, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(BlogStyle.blogContainer)}>
        <Box padding={12}>
          <BlogHeader blogs={Array.of<IBlog>(fixtures.blog, fixtures.blog, fixtures.blog)} />
          <Box paddingY={6} />
          <BlogPreview blog={fixtures.blog} />
        </Box>
      </div>
    );
  }
}

export default Blog;
