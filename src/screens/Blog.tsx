import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/actions/postBlog';

import { blogs } from '../graphql/queries/blogs';
import MainSpinner from '../components/spinner/MainSpinner';

import { objectAreSame } from '../custom/function';

interface Props {
  parentStyle?: any;
  fetchBlogs: any;
  blogs: any;
}

interface States {
  // blogs: IBlog[];
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

  shouldComponentUpdate(nextProps, nextState): boolean {
    const { loading } = this.state;
    return nextState.loading !== loading;
  }

  componentWillReceiveProps(nextProps: any) {
    const { blogs, fetchBlogs } = this.props;
    const { data } = nextProps;
    const dataBlogs = (data as any).blogs;
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

  render() {
    const { loading } = this.state;
    const { parentStyle, blogs, data } = this.props;
    if (loading) {
      return <div style={ parentStyle }><MainSpinner color="#150940" name="cube-grid"/></div>;
    }

    return (
      <div style={ parentStyle } className="animated fadeInUp">
        <h3>Testing Blog</h3>
        <NavLink to="/">
          Back to home
        </NavLink>
      </div>
    );
  }
}

const blogCurrent = graphql<any>(blogs, {
  options: { variables: { startAt: 1, endAt: 3 } },
})(Blog);

const mapStateToProps = (state: any) => ({
  blogs: state.blogs,
});

export default connect(mapStateToProps, { fetchBlogs })(blogCurrent);
