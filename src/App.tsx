import * as React from 'react';
import { IoIosArrowDown, IoIosHeart } from 'react-icons/io';
import { Alert, Container } from 'reactstrap';
import { Query } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import './styles/Main.css';
import './styles/NavWrapper.css';

// Custom Elements
import Experience from './screens/Experience';
import Introduction from './screens/Introduction';
import Education from './screens/Education';
import Project from './screens/Project';
import Footer from './screens/Footer';
import BlogPreview from './screens/BlogPreview';
import Blog from './screens/Blog';
import MenuItem from './components/MenuItem';
import MainSpinner from './components/spinner/MainSpinner';
import HomeSpinner from './components/spinner/HomeSpinner';
import AlertNotExisted from './components/AlertNotExisted';

import { default as radioSpinner } from './images/radio_spinner.gif';

// Import GraphQL Queries
import { meQuery } from './graphql/queries/me';
import { Me } from './schemaTypes';

import { IEducation, IExperience, IMe, IProject } from './custom/interface';

interface States {
  prevScrollpos: any;
  visible: boolean;
  visibleAlertSourceCode: boolean;
  alertTitle: string;
  alertVisible: boolean;
  height: number;
  width: number;
}

class App extends React.Component<{}, States> {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      visibleAlertSourceCode: true,
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
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      visible,
      prevScrollpos: currentScrollPos,
    });
  }

  showAlertViewNotReady(showed: boolean, title?: string) {
    this.setState({
      alertTitle: title || 'default',
      alertVisible: showed,
    });
    setTimeout(() => {
      this.setState({
        alertVisible: false,
      });
    },         1000);
  }

  onDismiss() {
    this.setState({
      visibleAlertSourceCode: false,
    });
  }

  public render() {
    const {
      alertVisible,
      alertTitle,
      visible,
      visibleAlertSourceCode,
      width,
      height,
    } = this.state;
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
        : { top: '-6rem' }
      : { top: '0' };

    const marginTopMainNav = visibleAlertSourceCode
      ? width > 375
        ? { marginTop: '4rem' }
        : { marginTop: '9rem' }
      : width > 375
        ? { marginTop: '0' }
        : { marginTop: '2rem' };

    const marginTopBlogMainNav = visibleAlertSourceCode
      ? width > 375
        ? { marginTop: '12rem' }
        : { marginTop: '18rem' }
      : width > 375
        ? { marginTop: '8rem' }
        : { marginTop: '10rem' };

    return (
      <Query<Me> query={ meQuery }>
        { ({ loading, error, data }) => {
          if (loading) {
            return (
              <HomeSpinner
                containerImg={ radioSpinner }
                contentText="Please wait a moment"
              />
            );
          }

          if (!data || !data.me) {
            return null;
          }

          if (!data.me.education && !data.me.project && !data.me.experience) {
            return null;
          }

          const educations = data.me.education as IEducation[];
          const projects = data.me.project as IProject[];
          const experiences = data.me.experience as IExperience[];
          const me = data.me as IMe;

          return (
            <BrowserRouter>
              <div>
                {/* Navigation */ }
                <nav className="wrapper--introduction__parent" style={ topNavbar }>
                  <Alert
                    color="info"
                    isOpen={ visibleAlertSourceCode }
                    toggle={ this.onDismiss }
                    style={ { textAlign: 'center' } }
                  >
                    This project is maintained with the legacy of open source. Check in my
                    <a
                      href="https://github.com/DitoHI/react-cosmosdb-graphql"
                      target="_blank"
                      className="alert-link"
                    >&nbsp;Github&nbsp;</a>profile.
                    Spread the <IoIosHeart/>
                  </Alert>
                  <MenuItem
                    showAlertViewNotReady={ this.showAlertViewNotReady }
                    refs={ refs }
                  />
                  <AlertNotExisted
                    title={ alertTitle }
                    propVisible={ alertVisible }
                  />
                </nav>

                <Switch>
                  <Route path="/" exact>
                    <div
                      ref={ meRef }
                      className="main-nav"
                      style={ marginTopMainNav }
                    >
                      <Introduction/>
                      <Container className="wrapper--flex-center-space">
                        <IoIosArrowDown
                          size="68px"
                          color="#e11414"
                          onClick={ () => {
                            if (refs[1].current) {
                              this.showAlertViewNotReady(false);
                              refs[1].current.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              this.showAlertViewNotReady(true, 'education');
                            }
                          } }
                          style={ {
                            cursor: 'pointer',
                          } }
                        />
                      </Container>
                    </div>
                    <div className="wrapper--container-margin-top-bottom">
                      <div ref={ educationRef }>
                        <Education
                          educations={ educations }
                        />
                      </div>
                      <div
                        ref={ experienceRef }
                        style={ {
                          backgroundColor: '#f7f7f8',
                        } }
                      >
                        <Experience
                          experiences={ experiences }
                        />
                      </div>
                      <div
                        ref={ projectRef }
                        style={ {
                          backgroundColor: '#efeff3',
                        } }
                      >
                        <Project
                          projects={ projects }
                        />
                      </div>
                      <div
                        style={ {
                          backgroundColor: '#fff',
                        } }
                      >
                        <BlogPreview/>
                      </div>
                    </div>
                  </Route>
                  <Route
                    path="/blog"
                    render={ props =>
                      <Blog
                        { ...props }
                        children={ marginTopMainNav }
                      />
                    }
                  />
                </Switch>

                {/* Footer */ }
                <div
                  style={ {
                    backgroundColor: '#f7f7f8',
                  } }
                  className="wrapper--padding-top-bottom-50"
                >
                  <Footer
                    me={ me }
                  />
                </div>
              </div>
            </BrowserRouter>
          );
        } }
      </Query>
    );
  }
}

export default App;
