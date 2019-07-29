import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'aphrodite';
import { ChildProps } from 'react-apollo';
import 'gestalt/dist/gestalt.css';
import { connect } from 'react-redux';

import BlogContent from '../../components/v2/blog/BlogContent';
import BlogMain from '../../components/v2/blog/BlogMain';

import BlogStyle from '../../styles/blog/BlogStyle';

import fixtures from '../../test/fixtures';

import blogV2Action from '../../redux/actions/blogV2Action';

interface IProps {
  parentStyle?: any;
  firebaseDb?: any;
  initFirebase?: any;
}

class Blog extends React.Component<ChildProps<IProps>, {}> {
  constructor(props) {
    super(props);
  }

  componentWillMount(): void {
    const { initFirebase } = this.props;
    window.scrollTo(0, 0);

    initFirebase();
  }

  render() {
    return (
      <div className={css(BlogStyle.blogContainer)}>
        <Switch>
          <Route exact path="/blog" render={(props) => <BlogMain user={fixtures.user} />} />
          <Route
            path="/blog/:id"
            render={({ match }) => <BlogContent match={match} user={fixtures.user} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  firebaseDb: state.blogs.firebaseDb,
});

const mapDispatchToProps = (dispatch) => ({
  initFirebase: () => dispatch(blogV2Action.initFirebase()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);
