import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Container } from 'reactstrap';
import { Query } from 'react-apollo';
import classnames from 'classnames';

import './index.css';
import './styles/Main.css';
import './styles/NavWrapper.css';

// Custom Elements
import MenuItem from './components/MenuItem';
import Introduction from './screens/Introduction';
import MainSpinner from './components/MainSpinner';
import Education from './screens/Education';
import Project from './screens/Project';
import AlertNotExisted from './components/AlertNotExisted';

// Import GraphQL Queries
import { meQuery } from './graphql/queries/me';
import { Me } from './schemaTypes';

import { IEducation, IProject } from './custom/interface';

interface States {
  prevScrollpos: any;
  visible: boolean;
  alertTitle: string;
  alertVisible: boolean;
}

class App extends React.Component<{}, States> {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      alertTitle: 'default',
      alertVisible: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.showAlertViewNotReady = this.showAlertViewNotReady.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    setTimeout(() => { this.setState({ alertVisible: false }); },
               1000);
  }

  public render() {
    const { alertVisible, alertTitle, visible } = this.state;
    const meRef: any = React.createRef();
    const educationRef: any = React.createRef();
    const projectRef: any = React.createRef();

    const refs: any = [];
    refs.push(meRef);
    refs.push(educationRef);
    refs.push(projectRef);

    return (
      <div>
        <nav className={
          classnames('wrapper--introduction__parent',
                     { 'wrapper--introduction__parent--hidden': !visible },
          )}
        >
          <MenuItem
            showAlertViewNotReady={this.showAlertViewNotReady}
            refs={refs}
          />
          <AlertNotExisted
            title={ alertTitle }
            propVisible={ alertVisible }
          />
        </nav>
        <div
          ref={meRef}
          className="main-nav"
        >
          <Introduction/>
          <Container className="wrapper--flex-center-space">
            <IoIosArrowDown
              size="68px"
              color="#e11414"
            />
          </Container>
        </div>

        <Query<Me> query={meQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <MainSpinner
                  name="circle"
                  color="#404040"
                  style={{
                    width: '80px',
                    height: '80px',
                  }}
                />
              );
            }

            if (!data || !data.me) {
              return null;
            }

            if (!data.me.education && !data.me.project) {
              return null;
            }

            const educations = data.me.education as IEducation[];
            const projects = data.me.project as IProject[];

            return (
              <div className="wrapper--container-margin-top-bottom">
                <div ref={educationRef}>
                  <Education
                    educations={educations}
                  />
                </div>
                <div
                  ref={projectRef}
                  style={{
                    backgroundColor: '#f7f7f8',
                  }}
                >
                  <Project
                    projects={projects}
                  />
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
