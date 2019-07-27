import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'aphrodite';
import { ChildProps } from 'react-apollo';
import 'gestalt/dist/gestalt.css';

import BlogContent from '../../components/v2/blog/BlogContent';
import BlogMain from '../../components/v2/blog/BlogMain';

import BlogStyle from '../../styles/blog/BlogStyle';

import fixtures from '../../test/fixtures';

interface IProps {
  parentStyle?: any;
}

class Blog extends React.Component<ChildProps<IProps>, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(BlogStyle.blogContainer)}>
        <Switch>
          <Route exact path="/blog" render={(props) => <BlogMain user={fixtures.user} />} />
          <Route path="/blog/:id" component={BlogContent} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
