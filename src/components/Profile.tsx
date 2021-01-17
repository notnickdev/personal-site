import React from 'react';

import logo from '../images/logo.png';

// Interfaces
import { ContactProps } from '../interfaces/ContactProps';

// Styles
import './Profile.css';

export const Profile: React.FC<ContactProps> = ({ email, twitter, snapchat, instagram }): JSX.Element => {
  return (
    <main className="profile__wrap">
      <img src={logo} alt="logo" />
      <div className="profile__information">
        <h1>Hi! 👋 I'm Nicholas</h1>
        <p className="profile__introduction">
          I'm Nicholas, a backend developer from the UK. I mainly use
          TypeScript, NodeJS, React and a little bit of Rust on the side. I
          enjoy the logic and infrastructure of things, in my free time I'll
          work on some frontend projects.{' '}
        </p>
        <div className="profile__contact">
          <a target="_blank" rel="noreferrer" href={email}>Contact Me</a>
        </div>
        <ul className="social__links">
            <li><a target="_blank" rel="noreferrer" href={twitter}>Twitter</a></li>
            <li><a target="_blank" rel="noreferrer" href={snapchat}>Snapchat</a></li>
            <li><a target="_blank" rel="noreferrer" href={instagram}>Instagram</a></li>
          </ul>
      </div>
    </main>
  );
};
