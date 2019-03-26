import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container } from 'reactstrap';
import IBlog from '../custom/interface/IBlog';
import { fetchBlogs } from '../redux/actions/postBlog';

import { blogs } from '../graphql/queries/blogs';
import MainSpinner from '../components/spinner/MainSpinner';
import ContentBlog from '../components/contents/ContentBlog';

import { objectAreSame } from '../custom/function';
import BlogStyle from '../styles/blog/BlogStyle';

import '../styles/Main.css';
import '../styles/blog/Blog.css';
import '../styles/Introduction.css';

interface Props {
  parentStyle?: any;
  fetchBlogs: any;
  blogs: any;
}

interface States {
  loading: boolean;
  blogs: [];
}

class Blog extends React.Component<ChildProps<Props>, States> {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
  }

  shouldComponentUpdate(nextProps): boolean {
    const { blogs } = this.props;
    const changedBlog = objectAreSame(blogs.items, nextProps.blogs.items);
    return !changedBlog;
  }

  componentWillReceiveProps(nextProps: any) {
    const { blogs, fetchBlogs } = this.props;
    const { data } = nextProps;
    const dataBlogs = (data as any).blogs;
    if (blogs.items && dataBlogs) {
      const blogChanged = objectAreSame(blogs.items, dataBlogs);
      if (!data.loading && !blogChanged) {
        if (dataBlogs.length === 0 && !dataBlogs) {
          this.setState({
            loading: true,
          });
        } else {
          this.setState({
            loading: false,
            blogs: dataBlogs,
          });
          fetchBlogs(dataBlogs);
        }
      }
    }
  }

  static renderHastag(hastags) {
    return hastags.map((hastag: string) => {
      return (
        <div key={ hastag } style={ BlogStyle.blogHastagsContent } className="hastag-content">
          { hastag }
        </div>
      );
    });
  }

  static renderBlog(blogs) {
    return blogs.map((blog: IBlog) => {
      return (
        <ContentBlog
          blog={ blog }
        />);
    });
  }

  render() {
    const { loading } = this.state;
    const { blogs, parentStyle, data } = this.props;
    if (loading) {
      return <div style={ parentStyle }><MainSpinner color="#150940" name="cube-grid"/></div>;
    }

    const hastags = blogs.items
      .map((blog) => {
        return blog.hastag;
      })
      .filter((v, i, a) => a.indexOf(v) === i);

    return (
      <div>
        <div style={ BlogStyle.blogNavMain } className="animated fadeInDown">
          <span style={ BlogStyle.blogNavMainTitle }>Hafizh Notes</span>
          <NavLink to="/">
            <Button color="link" style={ BlogStyle.blogNavMainRedirect }>
              Back to Home
            </Button>
          </NavLink>
        </div>

        {/* Hastags */ }
        <Container
          style={ BlogStyle.blogHastagsWrapper }
          className="wrapper--padding-top-bottom-20"
        >
          { Blog.renderHastag(hastags) }
        </Container>

        {/* Blogs */ }
        <div style={ BlogStyle.blogItemsContent } className="wrapper--padding-top-bottom-50">
          { Blog.renderBlog(blogs.items) }
        </div>
      </div>
    );
  }
}

const blogCurrent = graphql<any>(blogs, {
  options: { variables: { startAt: 0, endAt: 3 } },
})(Blog);

const mapStateToProps = (state: any) => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps, { fetchBlogs })(blogCurrent);
