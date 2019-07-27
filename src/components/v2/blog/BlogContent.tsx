import * as React from 'react';

import 'gestalt/dist/gestalt.css';

interface IProps {
  match: any;
}

class BlogContent extends React.Component<IProps, {}> {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return <div>Hello Content</div>;
  }
}

export default BlogContent;
