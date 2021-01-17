import React from 'react';

// Interfaces
import { Date } from '../interfaces/Date';

import './Footer.css';

export const Footer: React.FC<Date> = ({ date }): JSX.Element => {
  return (
    <footer>
      <p>© Nicholas {date}, all rights reserved.</p>
    </footer>
  )
}