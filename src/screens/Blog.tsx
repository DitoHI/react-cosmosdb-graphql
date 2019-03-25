import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { graphql, ChildProps } from 'react-apollo';
import { default as gql } from 'graphql-tag';

interface Props {
  parentStyle: any;
}

class Blog extends React.Component<ChildProps<Props>, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, data } = this.props;
    const blogs = (data as any).blogs;
    const parentStyle = children as React.CSSProperties;
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

const currentBlogs = gql`
      query Blogs($startAt: Int, $endAt: Int, $hastag: String) {
        blogs(startAt: $startAt, endAt: $endAt, hastag: $hastag) {
          id
          user
          title
          content
          lastEdited
          isDeleted
          imageUri
          positionIndex
          hastag
        }
      }
    `;

const blogCurrent = graphql(currentBlogs)(Blog);

export default blogCurrent;
