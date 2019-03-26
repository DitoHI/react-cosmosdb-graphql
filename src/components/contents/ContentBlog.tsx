import * as React from 'react';
import { Button, Container } from 'reactstrap';
import IBlog from '../../custom/interface/IBlog';

import '../../styles/Main.css';
import '../../styles/blog/Blog.css';
import BlogStyle from '../../styles/blog/BlogStyle';

interface Props {
  blog: IBlog;
}

const contentBlog: React.FunctionComponent<Props> =
  ({ blog }) => {
    const blogImage = blog.imageUri
      ? blog.imageUri
      : require('../../images/placeholder.png');

    return (
      <div>
        <div
          style={ BlogStyle.blogItemContentImageWrapper }
        >
          <img
            alt={ blog.title }
            src={ blogImage }
            className="blog-item-img"
          />
        </div>
        <div>
          <div style={ BlogStyle.blogItemContentTextTitle }>{ blog.title }</div>
          <div style={ BlogStyle.blogItemContentTextDesc }>{ blog.content }</div>
          <Button outline color="info" style={ BlogStyle.blogItemContentTextHastag }>
            <div>{ blog.hastag }</div>
          </Button>
        </div>
      </div>
    );
  };

export default contentBlog;
