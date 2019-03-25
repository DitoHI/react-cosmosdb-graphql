import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';

import IBlog from '../custom/interface/IBlog';
import { blogs } from '../graphql/queries/blogs';
import MainSpinner from '../components/spinner/MainSpinner';

interface Props {
  parentStyle: any;
}

interface States {
  blogs: IBlog[];
  loading: boolean;
}

class Blog extends React.Component<ChildProps<Props>, States> {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
  }

  componentWillReceiveProps(nextProps: ChildProps) {
    const { data } = nextProps;
    const blogs = (data as any).blogs;
    this.setState({
      blogs,
      loading: blogs.length === 0 && !blogs,
    });
  }

  render() {
    const { children } = this.props;
    const { blogs, loading } = this.state;
    const parentStyle = children as React.CSSProperties;
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

const blogCurrent = graphql(blogs)(Blog);

export default blogCurrent;
