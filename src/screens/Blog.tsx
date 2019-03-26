import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container } from 'reactstrap';
import { css } from 'aphrodite';

import { blogsQuery } from '../graphql/queries/blogs';
import MainSpinner from '../components/spinner/MainSpinner';
import ContentBlog from '../components/contents/ContentBlog';
import ContentBlogDetail from '../components/contents/ContentBlogDetail';

import { objectAreSame } from '../custom/function';
import BlogStyle from '../styles/blog/BlogStyle';
import IBlog from '../custom/interface/IBlog';
import { fetchBlogs } from '../redux/actions/postBlog';

import '../styles/Main.css';
import '../styles/blog/Blog.css';
import '../styles/Introduction.css';

interface Props {
  parentStyle?: any;
  fetchBlogs: any;
  activeBlog: any;
  blogs: any;
}

interface States {
  loading: boolean;
  blogs: [];
  blog: IBlog;
}

class Blog extends React.Component<ChildProps<Props>, States> {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
      blog: {} as IBlog,
    };

    this.setActiveBlog = this.setActiveBlog.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps: any) {
    const { blogs, fetchBlogs } = this.props;
    const { data } = nextProps;
    const dataBlogs = (data as any).blogs;
    if (blogs && dataBlogs) {
      const blogChanged = objectAreSame(blogs, dataBlogs);
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
      } else {
        this.setState({
          loading: false,
        });
      }
    }
  }

  renderHastag(hastags) {
    return hastags.map((hastag: string) => {
      return (
        <div
          key={ hastag }
          className={`${css(BlogStyle.blogHastagsContent)} hastag-content`}
        >
          { hastag }
        </div>
      );
    });
  }

  renderBlog(blogs) {
    return blogs.map((blog: IBlog) => {
      return (
        <ContentBlog
          key={ blog.title }
          blog={ blog }
          handleClick={ this.setActiveBlog }
        />);
    });
  }

  setActiveBlog(blogActive) {
    this.setState({
      blog: blogActive,
    });
  }

  render() {
    const { blog, loading } = this.state;
    const { blogs, data, children } = this.props;
    const parentStyle = children as React.CSSProperties;
    if (loading) {
      return <div style={ parentStyle }><MainSpinner color="#150940" name="cube-grid"/></div>;
    }

    const hastags = blogs
      .map((blog) => {
        return blog.hastag;
      })
      .filter((v, i, a) => a.indexOf(v) === i);

    return (
      <div>
        <div className={`${css(BlogStyle.blogNavMain)} animated fadeInDown`}>
          <span className={css(BlogStyle.blogNavMainTitle)}>Hafizh Notes</span>
          <NavLink to="/">
            <Button color="link" className={css(BlogStyle.blogNavMainRedirect)}>
              Back to Home
            </Button>
          </NavLink>
        </div>

        {/* Hastags */ }
        <Container
          className={`${css(BlogStyle.blogHastagsWrapper)} wrapper--padding-top-bottom-20`}
        >
          { this.renderHastag(hastags) }
        </Container>

        <Switch>
          <Route exact path="/blog">
            {/* Blogs */ }
            <div className={`${css(BlogStyle.blogItemsContent)} wrapper--padding-top-bottom-50`}>
              { this.renderBlog(blogs) }
            </div>
          </Route>
          <Route path="/blog/:blogId" component={ ContentBlogDetail }/>
        </Switch>
      </div>
    );
  }
}

const blogCurrent = graphql<any>(blogsQuery, {
  options: { variables: { startAt: 0, endAt: 8 } },
})(Blog);

const mapStateToProps = (state: any) => ({
  blogs: state.blogs.items,
});

export default connect(mapStateToProps, { fetchBlogs })(blogCurrent);
