import * as React from 'react';
import {
  Container,
} from 'reactstrap';
import { default as Slider } from 'react-slick';

import HeaderContainer from '../components/HeaderContainer';
import EducationCardView from '../components/EducationCardView';
import IEducation from '../custom/interface/IEducation';

interface Props {
  educations: IEducation[];
}

interface States {
  educationItems: any[];
}

class Education extends React.Component<Props, States> {

  constructor(props) {
    super(props);
    this.state = {
      educationItems: [],
    };
  }

  componentDidMount() {
    const { educations } = this.props;
    const educationIcons = ['college_icon.png', 'default_edu_icon.png'];
    this.setState({
      educationItems: educations.map((education: IEducation, step: number) => {
        return (
          <EducationCardView
            key={education.name}
            education={education}
            icon={educationIcons[step]}
          />
        );
      }),
    });
  }

  public render() {
    const { educationItems } = this.state;
    const sliderSetting = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container
        className="animated fadeInDown"
      >
        <HeaderContainer
          headerTitle="Education is the most important thing for me.
        So which schools I was educated ?"
        />
        <Slider {...sliderSetting}>
          {educationItems}
        </Slider>
      </Container>
    );
  }
}

export default Education;
