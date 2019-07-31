import * as React from 'react';
import {
  Box,
  Card,
  Column,
  Divider,
  Heading,
  Icon,
  IconButton,
  Image,
  Mask,
  Sticky,
  Text,
} from 'gestalt';
import { css } from 'aphrodite';
import 'gestalt/dist/gestalt.css';
import { Placeholder } from 'semantic-ui-react';
import * as moment from 'moment';
import { connect } from 'react-redux';

import { IBlog, IMe } from '../../../custom/interface';
import types, { IS_SM } from '../../../custom/types';

import BlogStyle from '../../../styles/blog/BlogStyle';
import Colors from '../../../styles/Colors';

import typesMod from '../../../redux/actions/typesMod';
import blogV2Action from '../../../redux/actions/blogV2Action';

import FirebaseConnect from '../../../utils/FirebaseConnect';

interface IProps {
  user: IMe;
  blog: IBlog;
  loading: boolean;
  incrementView: any;
}

interface IState {
  views: string;
  viewLoaded: boolean;
}

class BlogContentDetail extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      views: '0',
      viewLoaded: false,
    };
  }

  componentWillReceiveProps(nextProps): void {
    const { blog, incrementView, user } = nextProps;
    const db = FirebaseConnect.getDb();
    if (user && blog) {
      // increment the views
      incrementView(user, blog);

      const viewsRef = db.ref(typesMod.REF_BLOGS_VIEW(user.id, blog.id));

      viewsRef.on('value', (snapShot: any) => {
        this.setState({
          views: snapShot.val(),
          viewLoaded: true,
        });
      });
    }
  }

  renderContentPlaceholder() {
    const {} = this.props;
    return (
      <Box
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop={4}
      >
        <Placeholder fluid style={{ width: '80%' }}>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Box>
    );
  }

  renderImageWithContent() {
    const {} = this.props;
    return (
      <Placeholder
        style={{
          height: types.DEFAULT_BLOG_PREVIEW_USER_AVA.height,
          width: types.DEFAULT_BLOG_PREVIEW_USER_AVA.width,
        }}
      >
        <Placeholder.Image />
      </Placeholder>
    );
  }

  renderTitlePlaceholder() {
    const {} = this.props;
    return (
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }

  renderOneLine() {
    const {} = this.props;
    return (
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }

  renderTagsPlaceholder() {
    const {} = this.props;
    return (
      <Box>
        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Box>
    );
  }

  renderTags() {
    const { blog } = this.props;
    return (
      blog &&
      blog.tags.map((tag) => {
        return (
          <Box key={tag} smPaddingY={2} paddingY={1} smMarginRight={9} marginRight={4}>
            <Card>
              <Text color="gray" size="xs" mdSize="sm" bold>
                #{tag}
              </Text>
            </Card>
          </Box>
        );
      })
    );
  }

  renderProfileImgAndTotalView() {
    const { loading, user } = this.props;
    const { viewLoaded, views } = this.state;
    return (
      <Box
        display="flex"
        direction={IS_SM ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
        smMarginBottom={0}
      >
        {loading ? (
          this.renderImageWithContent()
        ) : (
          <Mask
            shape="circle"
            height={types.DEFAULT_BLOG_PREVIEW_USER_AVA.height}
            width={types.DEFAULT_BLOG_PREVIEW_USER_AVA.width}
          >
            <Image
              alt={user.name}
              color={Colors.youngBlue}
              src={user.blobUri!}
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
            />
          </Mask>
        )}
        <Box display="none" smDisplay="block" paddingX={2} paddingY={4} width="100%">
          {loading ? (
            this.renderOneLine()
          ) : (
            <Text bold align="center">
              {user.name}
            </Text>
          )}
        </Box>
        <Box display="block" smDisplay="none" paddingX={2} />
        <Box display="flex" direction="column" alignItems="center">
          <IconButton
            accessibilityLabel="Love"
            bgColor="white"
            icon="face-smiley"
            iconColor="blue"
            size={IS_SM ? 'xl' : 'md'}
            onClick={() => {}}
          />

          {!viewLoaded ? (
            <Box width="100%">{this.renderOneLine()}</Box>
          ) : (
            <Text color="blue" size="xs" bold>
              {views} views
            </Text>
          )}
        </Box>
      </Box>
    );
  }

  render() {
    const { blog, loading, user } = this.props;

    return (
      <Box paddingX={4} smPaddingX={12} paddingY={1} smPaddingY={3}>
        <Box smPaddingX={3} paddingY={2} smPaddingY={6} justifyContent="center">
          {loading ? (
            this.renderTitlePlaceholder()
          ) : IS_SM ? (
            <Heading>{blog && blog.title}</Heading>
          ) : (
            <Text size="lg" bold>
              {blog && blog.title}
            </Text>
          )}
        </Box>
        {loading ? (
          <Box width="100%">{this.renderOneLine()}</Box>
        ) : (
          <Box display="flex" smPaddingX={3} alignItems="center" width="100%">
            <Icon accessibilityLabel="time" icon="clock" size={types.ICON_SIZE_XS} />
            <Box padding={2}>
              <Text size="xs" smSize="sm" color="gray" bold inline>
                {blog && moment(blog.lastEdited).format('LLLL')}
              </Text>
            </Box>
          </Box>
        )}
        <Box smPaddingY={3}>
          <Divider />
        </Box>
        <Box display="flex" smPaddingX={3} smPaddingY={6} paddingY={3} wrap>
          <Column span={12} smSpan={3}>
            {IS_SM ? (
              <Sticky top={types.DEFAULT_TOP_LG}>{this.renderProfileImgAndTotalView()}</Sticky>
            ) : (
              this.renderProfileImgAndTotalView()
            )}
          </Column>
          <Column span={12} smSpan={9}>
            {loading ? (
              this.renderContentPlaceholder()
            ) : (
              <Box>
                <Box smMarginBottom={3} marginBottom={1} smPaddingY={0} paddingY={3}>
                  <Text size="sm" smSize="xl" italic bold color="midnight">
                    "{blog && blog.quote}"
                  </Text>
                </Box>
                <Box marginBottom={6}>
                  <Divider />
                </Box>
                <Box paddingY={2} smMarginBottom={4} marginBottom={1}>
                  <Mask height={IS_SM ? types.DEFAULT_HEIGHT_IMG.lg : types.DEFAULT_HEIGHT_IMG.sm}>
                    <Image
                      alt={blog && blog.blobUri}
                      color="white"
                      src={blog && blog.blobUri!}
                      naturalHeight={1}
                      naturalWidth={1}
                      fit="contain"
                    />
                  </Mask>
                </Box>
                <div
                  className={css(BlogStyle.blogItemContentTextDesc)}
                  dangerouslySetInnerHTML={{ __html: blog && blog.content }}
                />
                <Box display="flex" direction="row" wrap>
                  {this.renderTags()}
                </Box>
              </Box>
            )}
          </Column>
        </Box>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementView: (user: IMe, blog: IBlog) => dispatch(() => blogV2Action.incrementView(user, blog)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BlogContentDetail);
