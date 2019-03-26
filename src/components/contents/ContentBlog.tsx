import * as React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IBlog from '../../custom/interface/IBlog';

import '../../styles/Main.css';
import '../../styles/blog/Blog.css';
import BlogStyle from '../../styles/blog/BlogStyle';

interface Props {
  blog: IBlog;
  handleClick: any;
}

const contentBlog: React.FunctionComponent<Props> = ({ blog, handleClick }) => {
  const blogImage = blog.imageUri
    ? blog.imageUri
    : require('../../images/placeholder.png');

  return (
    <div style={{ maxWidth: '750px' }}>
      <div
        style={ BlogStyle.blogItemContentImageWrapper }
      >
        <img
          alt={ blog.title }
          src={ blogImage }
          className="blog-item-img"
        />
      </div>
      <div style={ BlogStyle.blogItemContentTextWrapper }>
        <div style={ BlogStyle.blogItemContentTextTitle }>{ blog.title }</div>
        <div className="blog-item-content">{ blog.content }</div>

        <NavLink to={ `/blog/${blog.id}` }>
          <Button
            color="link" style={ BlogStyle.blogItemContentReadMore }
            onClick={ () => handleClick(blog) }
          >
            Read More
          </Button>
        </NavLink>
        <Button outline color="info" style={ BlogStyle.blogItemContentTextHastag }>
          <div>{ blog.hastag }</div>
        </Button>
      </div>
    </div>
  );
};

export default contentBlog;
