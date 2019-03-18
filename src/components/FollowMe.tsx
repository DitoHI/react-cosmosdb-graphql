import * as React from 'react';
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
} from 'react-icons/io';

import '../styles/Main.css';
import '../styles/FollowMe.css';

class FollowMe extends React.Component {
  render() {
    return (
      <div className="wrapper--flex-center-space wrapper--introduction__follow-me--parent">
        <a href="https://twitter.com/DitoHafizh" target="_blank">
          <IoLogoTwitter
            size="36px"
            color="#fafafa"
            className="wrapper--margin-left-right-20"
          />
        </a>
        <a href="https://www.linkedin.com/in/dito-hafizh-b882596b" target="_blank">
          <IoLogoLinkedin
            size="36px"
            color="#fafafa"
            className="wrapper--margin-left-right-20"
          />
        </a>
        <a href="https://github.com/DitoHI" target="_blank">
          <IoLogoGithub
            size="36px"
            color="#fafafa"
            className="wrapper--margin-left-right-20"
          />
        </a>
        <a href="https://www.instagram.com/ditohafizh" target="_blank">
          <IoLogoInstagram
            size="36px"
            color="#fafafa"
            className="wrapper--margin-left-right-20"
          />
        </a>
      </div>
    );
  }
}

export default FollowMe;
