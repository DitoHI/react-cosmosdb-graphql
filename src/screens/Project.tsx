import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { default as Slider } from 'react-slick';

import HeaderContainer from '../components/HeaderContainer';
import { default as ProjectContent } from '../components/contents/ContentProject';
import IProject from '../custom/interface/IProject';

import '../styles/Main.css';

interface Props {
  projects: IProject[];
}

interface States {
  projectItems: any[];
  activeProject: IProject;
}

class Project extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      projectItems: [],
      activeProject: {} as IProject,
    };

    this.onChangeContent = this.onChangeContent.bind(this);
  }

  componentDidMount() {
    const { projects } = this.props;
    const projectIcons = ['icrop.png', 'default_project.png'];
    this.setState({
      activeProject: projects[0],
      projectItems: projects.map((project: IProject, step: number) => {
        return (
          <img
            key={ project.name }
            alt={ project.name }
            src={ require(`../images/project/${ projectIcons[step] }`) }
            className="wrapper--icon-card-md"
          />
        );
      }),
    });
  }

  shouldComponentUpdate(nextState): boolean {
    const { activeProject } = this.state;
    return nextState.activeProject !== activeProject;
  }

  onChangeContent(slideNumber) {
    const { projects } = this.props;
    const { activeProject } = this.state;
    this.setState({
      activeProject: projects[slideNumber],
    });
  }

  render() {
    const { activeProject, projectItems } = this.state;
    const sliderSetting = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.onChangeContent(next),
    };

    return (
      <Container
        className="animated fadeInUp"
      >
        <HeaderContainer
          headerTitle="What can I help you with? These are some of my
          projects which make me proud"
        />
        <Row>
          <Col sm="5" className="wrapper--vertical-center">
            <Slider { ...sliderSetting }>
              { projectItems }
            </Slider>
          </Col>
          <Col sm="7">
            <ProjectContent
              project={ activeProject }
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Project;
