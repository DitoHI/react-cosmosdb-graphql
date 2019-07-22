import * as React from 'react';
import { Query } from 'react-apollo';
import { css } from 'aphrodite';
import * as dateFormat from 'dateformat';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

import '../../styles/Main.css';
import '../../styles/blog/Blog.css';
import IBlog from '../../custom/interface/IBlog';
import BlogStyle from '../../styles/blog/BlogStyle';

// Import GraphQL Queries
import { blogsQuery } from '../../graphql/queries/blogs';
import { Blogs } from '../../schemaTypes';
import MainSpinner from '../spinner/MainSpinner';

interface Props {
  match: any;
}

class ContentBlogDetail extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      match: { params },
    } = this.props;
    const blogId = params.blogId;
    return (
      <Query<Blogs> query={blogsQuery} variables={{ id: blogId }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <MainSpinner color="#150940" name="cube-grid" />;
          }

          if (error) {
            return null;
          }

          if (!data) {
            return null;
          }

          if (!data.blogs) {
            return null;
          }

          if (data.blogs.length === 0) {
            return null;
          }

          const blog = (data.blogs[0] as unknown) as IBlog;

          if (!blog) {
            return null;
          }

          const blogImage = blog.blobUri ? blog.blobUri : require('../../images/placeholder.png');

          return (
            <div
              className={css([
                BlogStyle.blogItemsContent,
                BlogStyle.blogItemsContentWrapper,
                BlogStyle.blogItemContentWrapper,
              ])}
            >
              <div className={css(BlogStyle.blogItemContentTextWrapper)}>
                <NavLink to="/blog">
                  <Button color="link" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    {' '}
                    Back to Blog
                  </Button>
                </NavLink>
                <div className={css(BlogStyle.blogItemContentTextTitle)}>{blog.title}</div>
                <div className={css([BlogStyle.blogItemContentImageWrapper])}>
                  <img alt={blog.title} src={blogImage} className="blog-item-img" />
                </div>
                <div className={css(BlogStyle.blogItemContentLastEdited)}>
                  {dateFormat(blog.lastEdited, 'dd mmm yyyy')}
                </div>
                <div
                  className={css(BlogStyle.blogItemContentTextDesc)}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <Button outline color="info" className={css(BlogStyle.blogItemContentTextHastag)}>
                  <div>{blog.tags}</div>
                </Button>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ContentBlogDetail;
