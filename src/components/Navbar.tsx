import React from 'react';

// Interfaces
import { SocialProps } from '../interfaces/SocialProps'

// Styles
import './Navbar.css'

export const NavBar: React.FC<SocialProps> = ({ linkedin, github, keybase }): JSX.Element => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          <li><a target="_blank" rel="noreferrer" href={linkedin}>LinkedIn</a></li>
          <li><a target="_blank" rel="noreferrer" href={github}>GitHub</a></li>
          <li><a target="_blank" rel="noreferrer" href={keybase}>Keybase</a></li>
        </ul>
      </nav>
    </div>
  );
}