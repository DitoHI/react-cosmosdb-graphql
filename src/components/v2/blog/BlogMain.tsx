import * as React from 'react';
import { Box, Spinner } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import { IBlog, IMe } from '../../../custom/interface';
import { blogsQuery } from '../../../graphql/queries/blogs';

import blogV2Action from '../../../redux/actions/blogV2Action';

import types from '../../../custom/types';

import ErrorPath from '../../ErrorPath';
import BlogHeader from './BlogHeader';
import BlogPreview from './BlogPreview';

interface IProps {
  user: IMe;
  pagination: {
    start: number;
    end: number;
  };
  upPagination: any;
  restorePagination: any;
}

class BlogMain extends React.Component<IProps, {}> {
  componentWillUnmount(): void {
    const { restorePagination } = this.props;
    restorePagination();
  }

  renderBlogPreview(blogs: IBlog[]) {
    const { user } = this.props;
    return blogs.map((blog, index) => {
      const nearestIndex = 5 * Math.floor(index / 5) + index;
      return (
        <Box
          key={blog.titlePreview}
          marginBottom={3}
          smMarginBottom={4}
          paddingY={2}
          smPaddingY={4}
        >
          <BlogPreview bgColor={types.COLOR_TOP_STORIES[nearestIndex]} blog={blog} user={user} />
        </Box>
      );
    });
  }

  renderSpinner() {
    const {} = this.state;
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Spinner accessibilityLabel="blog_preview_spinner" show />
      </Box>
    );
  }

  render() {
    const { pagination, user } = this.props;
    return (
      <Query query={blogsQuery} variables={{ startAt: pagination.start, endAt: pagination.end }}>
        {({ loading, error, data }) => {
          if (error) {
            return (
              <ErrorPath
                text={`${(error as any).message || 'Server is still in maintenance'}`}
                statusCode={500}
                icon={null}
                colorText="white"
              />
            );
          }

          const blogs = data.blogs as IBlog[];
          return (
            <Box>
              <Box padding={6} mdPadding={9} lgPadding={12}>
                <BlogHeader />
                <Box paddingY={3} mdPaddingY={4} lgPaddingY={6} />
              </Box>
              <Box paddingX={3} mdPaddingX={6} lgPaddingX={9}>
                {loading ? this.renderSpinner() : this.renderBlogPreview(blogs)}
              </Box>
              <Box smPaddingY={6} lgMarginBottom={12} mdMarginBottom={6} smMarginBottom={0} />
            </Box>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  pagination: state.blogs.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  upPagination: () => dispatch(blogV2Action.upPagination),
  restorePagination: () => dispatch(blogV2Action.restorePagination),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogMain);
