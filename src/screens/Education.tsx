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
  activeIndex: number;
  educationItems: any[];
}

class Education extends React.Component<Props, States> {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
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
    const { activeIndex, educationItems } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container
        style={{ marginTop: '50px', marginBottom: '50px' }}
        className="animated fadeInDown">
        <HeaderContainer
          headerContainerStyle={{
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'center',
          }}
          headerTitle="Education is the most important thing for me.
        So which schools I was educated ?"
          headerTextStyle={{
            color: '#e00303ff',
            fontWeight: '600',
            fontSize: '28px',
            maxWidth: '700px',
          }}
        />
        <Slider {...settings}>
          {educationItems}
        </Slider>
      </Container>
    );
  }
}

export default Education;
