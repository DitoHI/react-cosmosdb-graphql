import * as React from 'react';
import { Box, Divider, Spinner, Sticky } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { Placeholder } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import * as _ from 'lodash';
import { connect } from 'react-redux';

import blogsQuery from '../../../graphql/queries/queries_v2/blogsQuery';
import { getBlogById, getBlogByTitleDash } from '../../../schemaTypes';

import BlogContentDetail from '../../contents/v2_contents/BlogContentDetail';
import BlogContentHeader from '../../contents/v2_contents/BlogContentHeader';
import { IBlog, IMe } from '../../../custom/interface';
import fixtures from '../../../test/fixtures';
import ErrorPath from '../../ErrorPath';

interface IProps {
  match: any;
  user: IMe;
  firebaseDb?: any;
  incrementView?: any;
}

class BlogContent extends React.Component<IProps, {}> {
  componentWillMount(): void {
    window.scrollTo(0, 0);
  }

  renderError(message: string) {
    const {} = this.props;
    return (
      <Box padding={12}>
        <Box color="white" display="flex" alignItems="center" justifyContent="center">
          <ErrorPath
            text={message}
            statusCode={500}
            icon={require('../../../images/server_error.png')}
          />
        </Box>
      </Box>
    );
  }

  renderBlogPlaceholder() {
    const {} = this.props;
    return (
      <Box padding={12}>
        <Box color="white" display="flex" alignItems="center" justifyContent="center">
          <Box padding={12}>
            <Spinner accessibilityLabel="blog_content_placeholder" show />
          </Box>
        </Box>
      </Box>
    );
  }

  render() {
    const {
      match: {
        params: { titleDash },
      },
    } = this.props;
    return (
      <Query<getBlogByTitleDash> query={blogsQuery.getBlogByTitleDash} variables={{ titleDash }}>
        {({ loading, error, data }) => {
          if (error) {
            return this.renderError(
              `${(error as any).message || 'Server is still in maintenance'}`,
            );
          }

          if (!data || (_.isEmpty(data) && !loading)) {
            return this.renderError('Server is still in maintenance');
          }

          const blog = data.getBlogByTitleDash as IBlog;

          return (
            <Box paddingX={6} paddingY={6} smPadding={12}>
              <Box color="white" shape="rounded">
                {!error && data && (
                  <Box>
                    <Sticky top={0} dangerouslySetZIndex={{ __zIndex: 99 } as any}>
                      <BlogContentHeader blog={blog} loadingParent={loading} />
                      <Divider />
                    </Sticky>
                    <BlogContentDetail blog={blog} user={fixtures.user} loading={loading} />
                  </Box>
                )}
              </Box>
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

export default connect(
  mapStateToProps,
  {},
)(BlogContent);
