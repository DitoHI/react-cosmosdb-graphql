import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Testing Blog
        </h3>
        <NavLink to="/" >
          Back to home
        </NavLink>
      </div>
    );
  }
}

export default Blog;
