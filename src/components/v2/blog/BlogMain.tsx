import * as React from 'react';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { connect } from 'react-redux';

import { IBlog, IMe } from '../../../custom/interface';

import blogV2Action from '../../../redux/actions/blogV2Action';

import fixtures from '../../../test/fixtures';

import BlogHeader from './BlogHeader';
import BlogPreview from './BlogPreview';

interface IProps {
  user: IMe;
  pagination: {
    start: number;
    end: number;
  };
  upPagination: any;
}

class BlogMain extends React.Component<IProps, {}> {
  render() {
    const { pagination, user } = this.props;
    return (
      <Box>
        <Box padding={12}>
          <BlogHeader blogs={Array.of<IBlog>(fixtures.blog, fixtures.blog, fixtures.blog)} />
          <Box paddingY={6} />
        </Box>
        <Box paddingX={9}>
          <BlogPreview blog={fixtures.blog} user={user} />
        </Box>
        <Box paddingY={6} />
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  pagination: state.blogs.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  upPagination: () => dispatch(() => blogV2Action.upPagination()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogMain);
