import * as React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IBlog from '../../custom/interface/IBlog';
import { css } from 'aphrodite';

import '../../styles/Main.css';
import '../../styles/blog/Blog.css';
import BlogStyle from '../../styles/blog/BlogStyle';
import * as dateFormat from 'dateformat';

interface Props {
  blog: IBlog;
  handleClick: any;
}

const contentBlog: React.FunctionComponent<Props> = ({ blog, handleClick }) => {
  const blogImage = blog.imageUri
    ? blog.imageUri
    : require('../../images/placeholder.png');

  // testing
  // blog.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  return (
    <div className={css(BlogStyle.blogItemContentWrapper)}>
      <div
        className={css(BlogStyle.blogItemContentImageWrapper)}
      >
        <img
          alt={ blog.title }
          src={ blogImage }
          className="blog-item-img"
        />
      </div>
      <div className={css(BlogStyle.blogItemContentLastEdited)}>
        { dateFormat(blog.lastEdited, 'dd mmm yyyy') }
      </div>
      <div className={css(BlogStyle.blogItemContentTextWrapper)}>
        <div className={css(BlogStyle.blogItemContentTextTitle)}>{ blog.title }</div>
        <div className="blog-item-content">{ blog.content }</div>

        <NavLink to={ `/blog/${blog.id}` }>
          <Button
            color="link"
            className={css(BlogStyle.blogItemContentReadMore)}
            onClick={ () => handleClick(blog) }
          >
            Read More
          </Button>
        </NavLink>
        <Button
          outline
          color="info"
          className={css(BlogStyle.blogItemContentTextHastag)}
        >
          <div>{ blog.hastag }</div>
        </Button>
      </div>
    </div>
  );
};

export default contentBlog;
