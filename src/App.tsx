import { css } from 'aphrodite';
import * as React from 'react';
import { Query } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';
import './styles/Main.css';
import './styles/NavWrapper.css';

// Custom Function
import elementAction from './redux/actions/elementAction';

// Custom Elements
import Footer from './screens/Footer';
import Blog from './screens/Blog';
import HomeSpinner from './components/spinner/HomeSpinner';
import ErrorPath from './components/ErrorPath';
import HomePage from './screens/HomePage';

// Custom Elements v2
import { default as BlogV2 } from './screens/v2/Blog';
import { default as FooterV2 } from './screens/v2/Footer';

import { default as radioSpinner } from './images/radio_spinner.gif';

// Import GraphQL Queries
import { meQuery } from './graphql/queries/me';
import { Me } from './schemaTypes';

import { IEducation, IExperience, IMe, IProject } from './custom/interface';
import MainStyle from './styles/MainStyle';

interface Props {
  setAlertSourceCodeVisible: any;
  visibleAlertSourceCode: boolean;
  setNotReadyElement: any;
}

interface States {
  prevScrollpos: any;
  visible: boolean;
  alertTitle: string;
  alertVisible: boolean;
  height: number;
  width: number;
}

class App extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      alertTitle: 'default',
      alertVisible: false,
      height: 0,
      width: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.showAlertViewNotReady = this.showAlertViewNotReady.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.scrollTo(0, 0);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleScroll() {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos >= currentScrollPos || currentScrollPos <= 10;

    this.setState({
      visible,
      prevScrollpos: currentScrollPos,
    });
  }

  showAlertViewNotReady(showed: boolean, title?: string) {
    const { setNotReadyElement } = this.props;
    setNotReadyElement(showed, title);
    setTimeout(() => {
      setNotReadyElement(false, title);
    }, 1000);
  }

  onDismiss() {
    const { setAlertSourceCodeVisible } = this.props;
    setAlertSourceCodeVisible(false);
  }

  public render() {
    const { visibleAlertSourceCode } = this.props;
    const { alertVisible, alertTitle, visible, width, height } = this.state;
    const meRef: any = React.createRef();
    const educationRef: any = React.createRef();
    const projectRef: any = React.createRef();
    const experienceRef: any = React.createRef();

    const refs: any = [];
    refs.push(meRef);
    refs.push(educationRef);
    refs.push(experienceRef);
    refs.push(projectRef);

    const topNavbar = !visible
      ? visibleAlertSourceCode
        ? width > 375
          ? { top: '-10rem' }
          : { top: '-20rem' }
        : { top: '-12rem' }
      : { top: '0' };

    const marginTopMainNav = visibleAlertSourceCode
      ? width > 375
        ? { marginTop: '4rem', paddingTop: '6rem' }
        : { marginTop: '9rem', paddingTop: '4rem' }
      : width > 375
      ? { marginTop: '0', paddingTop: '6rem' }
      : { marginTop: '2rem', paddingTop: '3rem' };

    const marginTopBlogMainNav = visibleAlertSourceCode
      ? width > 375
        ? { marginTop: '12rem' }
        : { marginTop: '18rem' }
      : width > 375
      ? { marginTop: '8rem' }
      : { marginTop: '10rem' };

    return (
      <Query<Me> query={meQuery} variables={{ sort: { by: 'dateStart', as: 'asc' } }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <HomeSpinner containerImg={radioSpinner} contentText="Please wait a moment" />;
          }

          if (!data || !data.me) {
            return (
              <ErrorPath
                text={`${(error && (error as any).message) || 'Server is still in maintenance'}`}
                statusCode={500}
                icon={require('./images/server_error.png')}
              />
            );
          }

          if (!data.me.education && !data.me.project && !data.me.experience) {
            return (
              <ErrorPath
                text="Server is still in maintenance"
                statusCode={500}
                icon={require('./images/server_error.png')}
              />
            );
          }

          const educations = data.me.education as IEducation[];
          const projects = data.me.project as IProject[];
          const experiences = data.me.experience as IExperience[];
          const me = data.me as IMe;

          return (
            <BrowserRouter>
              <div className={css(MainStyle.mainContainer)}>
                <Switch>
                  <Route path="/" exact>
                    <HomePage
                      dismissAlertSourceCode={this.onDismiss}
                      marginTopMainNav={marginTopMainNav}
                      topNavbar={topNavbar}
                      showAlertViewNotReady={this.showAlertViewNotReady}
                      educations={educations}
                      experiences={experiences}
                      projects={projects}
                    />
                  </Route>
                  <Route
                    path="/blog"
                    render={(props) => (
                      <BlogV2 {...props} children={marginTopBlogMainNav} user={me} />
                    )}
                  />
                  <Route
                    render={(props) => (
                      <ErrorPath {...props} text="Not found page" statusCode={403} />
                    )}
                  />
                </Switch>

                {/* Footer */}
                <FooterV2 me={me} />
              </div>
            </BrowserRouter>
          );
        }}
      </Query>
    );
  }
}

const mapDispatchTopProps = (dispatch: any) => {
  return {
    // tslint:disable-next-line:ter-arrow-parens
    setAlertSourceCodeVisible: (isVisible) =>
      dispatch(elementAction.setVisibleAlertSourceCode(isVisible)),
    setNotReadyElement: (isVisible, title) =>
      dispatch(elementAction.setNotReadyElement(isVisible, title)),
  };
};

const mapStateToProps = (state: any) => ({
  visibleAlertSourceCode: state.element.isAlertSourceVodeVisible,
});

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(App);
