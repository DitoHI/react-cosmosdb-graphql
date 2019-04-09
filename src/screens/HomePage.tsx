import * as React from 'react';
import { IoIosHeart, IoIosArrowDown } from 'react-icons/io';
import { connect } from 'react-redux';

import { Alert, Container } from 'reactstrap';
import AlertNotExisted from '../components/AlertNotExisted';
import MenuItem from '../components/MenuItem';
import BlogPreview from './BlogPreview';
import Education from './Education';
import Experience from './Experience';
import Introduction from './Introduction';
import Project from './Project';

interface Props {
  // props in redux
  visibleAlertSourceCode: boolean;
  isAlertOptional: boolean;
  alertOptionalTitle: string;
  // props in component
  dismissAlertSourceCode: any;
  marginTopMainNav: any;
  topNavbar: any;
  showAlertViewNotReady: any;
  educations: any;
  experiences: any;
  projects: any;
}

const homePage: React.FunctionComponent<Props> = ({
  // props in redux
  visibleAlertSourceCode,
  dismissAlertSourceCode,
  isAlertOptional,
  alertOptionalTitle,
  //  props in component
  marginTopMainNav,
  showAlertViewNotReady,
  topNavbar,
  educations,
  experiences,
  projects,
}) => {
  const meRef: any = React.createRef();
  const educationRef: any = React.createRef();
  const projectRef: any = React.createRef();
  const experienceRef: any = React.createRef();

  const refs: any = [];
  refs.push(meRef);
  refs.push(educationRef);
  refs.push(experienceRef);
  refs.push(projectRef);

  return (
    <div>
      <nav className="wrapper--introduction__parent" style={topNavbar}>
        <Alert
          color="info"
          isOpen={visibleAlertSourceCode}
          toggle={dismissAlertSourceCode}
          style={{ textAlign: 'center' }}
        >
          This project is maintained with the legacy of open source. Check in my
          <a
            href="https://github.com/DitoHI/react-cosmosdb-graphql"
            target="_blank"
            className="alert-link"
          >
            &nbsp;Github&nbsp;
          </a>
          profile. Spread the <IoIosHeart />
        </Alert>
        <MenuItem showAlertViewNotReady={showAlertViewNotReady} refs={refs} />
        <AlertNotExisted title={alertOptionalTitle} propVisible={isAlertOptional} />
      </nav>
      <div ref={meRef} className="main-nav" style={marginTopMainNav}>
        <Introduction />
        <Container className="wrapper--flex-center-space">
          <IoIosArrowDown
            size="68px"
            color="#e11414"
            onClick={() => {
              if (refs[1].current) {
                showAlertViewNotReady(false);
                refs[1].current.scrollIntoView({ behavior: 'smooth' });
              } else {
                showAlertViewNotReady(true, 'education');
              }
            }}
            style={{
              cursor: 'pointer',
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
          />
        </Container>
      </div>
      <div className="wrapper--container-margin-top-bottom">
        <div ref={educationRef}>
          <Education educations={educations} />
        </div>
        <div
          ref={experienceRef}
          style={{
            backgroundColor: '#f7f7f8',
          }}
        >
          <Experience experiences={experiences} />
        </div>
        <div
          ref={projectRef}
          style={{
            backgroundColor: '#efeff3',
          }}
        >
          <Project projects={projects} />
        </div>
        <div
          style={{
            backgroundColor: '#fff',
          }}
        >
          <BlogPreview />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  visibleAlertSourceCode: state.element.isAlertSourceVodeVisible,
  isAlertOptional: state.element.isAlertOptional,
  alertOptionalTitle: state.element.alertOptionalTitle,
});

export default connect(mapStateToProps)(homePage);
