import * as React from 'react';
import { Container } from 'reactstrap';
import { default as Slider } from 'react-slick';

import '../styles/Main.css';
import '../styles/CardContainer.css';

import HeaderContainer from '../components/HeaderContainer';
import ExperienceContent from '../components/ExperienceContent';
import IExperience from '../custom/interface/IExperience';

interface Props {
  experiences: IExperience[];
}

interface States {
  experienceIcons: any[];
  activeExperience: IExperience;
}

class Experience extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      experienceIcons: [],
      activeExperience: {} as IExperience,
    };
  }

  componentDidMount() {
    const { experiences } = this.props;
    const experienceIcons = ['experience_bem.png', 'experience_fkmpi.png'];
    this.setState({
      experienceIcons: experiences.map((experience: IExperience, step: number) => {
        return (
          <ExperienceContent
            experience={ experience }
            experienceIcon={ experienceIcons[step] }
          />
        );
      }),
    });
  }

  render() {
    const { experiences } = this.props;
    const { experienceIcons } = this.state;
    const sliderSetting = {
      dots: true,
      infinite: true,
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      speed: 500,
      slidesToShow: 2,
    };
    return (
      <Container className="animated fadeInUp">
        <HeaderContainer
          headerTitle="Julius Caesar once said that Experience is the best teacher.
          So I learn a lot from these teachers"
        />
        <Slider { ...sliderSetting }>
          { experienceIcons }
        </Slider>
      </Container>
    );
  }
}

export default Experience;
