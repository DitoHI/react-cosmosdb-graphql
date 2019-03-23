import * as React from 'react';
import { Button } from 'reactstrap';
import IExperience from '../custom/interface/IExperience';
import * as dateFormat from 'dateformat';

interface Props {
  experience: IExperience;
  experienceIcon: string;
}

const experienceContent: React.FunctionComponent<Props> = ({ experience, experienceIcon }) => {
  return (
    <div
      className="card-container"
    >
      <img
        alt={ experience.name }
        src={ require(`../images/experience/${ experienceIcon }`) }
        className="wrapper--icon-card wrapper--horizontal-center"
      />
      <div className="card-container__title">
        { experience.role }
      </div>
      <div className="card-container__btn-subtitle" style={ { textAlign: 'center' } }>
        { experience.name }
      </div>
      <div className="card-container__text" style={{ textAlign: 'center' }}>
        <Button color="danger" outline className="wrapper--btn-outline-radius">
          { dateFormat(experience.dateStart, 'mmm yyyy') }
          &nbsp;-&nbsp;
          { dateFormat(experience.dateEnd, 'mmm yyyy') }
        </Button>
      </div>
    </div>
  );
};

export default experienceContent;
