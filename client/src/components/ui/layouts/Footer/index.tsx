import React from 'react';

import { containerStyle, textStyle } from './style.css';

export const Footer: React.FC = React.memo(() => {
  return (
    <div className={containerStyle}>
      <span className={textStyle}>Task Management App by Koutaro Inoue</span>
    </div>
  );
});
