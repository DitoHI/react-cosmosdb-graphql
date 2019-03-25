import * as React from 'react';
import { ChildProps, graphql } from 'react-apollo';
import { NavLink } from 'react-router-dom';

import IBlog from '../custom/interface/IBlog';
import { blogs } from '../graphql/queries/blogs';

interface Props {
  parentStyle: any;
}

interface States {
  blogs: IBlog[];
}

class Blog extends React.Component<ChildProps<Props>, States> {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState): boolean {
    const { blogs } = this.state;
    return !!(nextState.blogs.length !== 0 && nextState.blogs !== blogs);
  }

  componentWillReceiveProps(nextProps: ChildProps) {
    const { data } = nextProps;
    const blogs = (data as any).blogs;
    this.setState({
      blogs,
    });
  }

  render() {
    const { children } = this.props;
    const { blogs } = this.state;
    const parentStyle = children as React.CSSProperties;
    console.log(blogs);
    return (
      <div style={ parentStyle } >
        <h3>
          Testing Blog
        </h3>
        <NavLink to="/">
          Back to home
        </NavLink>
      </div>
    );
  }
}

const blogCurrent = graphql(blogs)(Blog);

export default blogCurrent;
