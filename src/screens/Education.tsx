import * as React from 'react';
import {
  Carousel, CarouselControl, CarouselIndicators, CarouselItem,
  Col,
  Container,
  Row,
} from 'reactstrap';

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
  private animating: boolean;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      educationItems: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExisting = this.onExisting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExisting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { activeIndex, educationItems } = this.state;
    if (this.animating) {
      return;
    }
    const nextIndex = activeIndex === educationItems.length - 1
      ? 0
      : activeIndex + 1;
    this.setState({
      activeIndex: nextIndex,
    });
  }

  previous() {
    const { activeIndex, educationItems } = this.state;
    if (this.animating) {
      return;
    }
    const nextIndex = activeIndex === 0
      ? educationItems.length - 1
      : activeIndex - 1;
    this.setState({
      activeIndex: nextIndex,
    });
  }

  goToIndex(newIndex: number) {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: newIndex,
    });
  }

  componentDidMount() {
    const { educations } = this.props;
    const educationIcons = ['college_icon.png', 'default_edu_icon.png'];
    this.setState({
      educationItems: educations.map((education: IEducation, step: number) => {
        return (
          <CarouselItem
            onExiting={this.onExisting}
            onExited={this.onExited}
            key={education.name}
          >
            <EducationCardView
              key={education.name}
              education={education}
              icon={educationIcons[step]}
            />
          </CarouselItem>
        );
      }),
    });
  }

  public render() {
    const { activeIndex, educationItems } = this.state;
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
            fontSize: '36px',
            maxWidth: '700px',
          }}
        />
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={educationItems}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {educationItems}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
        </Carousel>
      </Container>
    );
  }
}

export default Education;
