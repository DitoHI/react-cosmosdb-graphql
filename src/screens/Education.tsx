import * as React from 'react';
import { Container } from 'reactstrap';

import HeaderContainer from '../components/HeaderContainer';
import IEducation from '../custom/interface/IEducation';

interface Props {
  educations: IEducation[];
}

const education: React.FunctionComponent<Props> = ({ educations }) => {
  return (
    <Container style={{ marginTop: '50px', marginBottom: '50px' }} className="animated fadeInDown">
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
    </Container>
  );
};

export default education;
