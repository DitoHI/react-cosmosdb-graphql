import * as React from 'react';
import { ChildProps } from 'react-apollo';

interface IProps {
  parentStyle?: any;
}

class Blog extends React.Component<ChildProps<IProps>, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello From Blog</div>;
  }
}

export default Blog;
