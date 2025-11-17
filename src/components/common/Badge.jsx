import React from 'react';
import classNames from 'classnames';

const Badge = ({ children, tone = 'accent', className }) => {
  const classes = classNames('badge', className, {
    'is-primary': tone === 'accent',
    'is-info': tone === 'info',
  });
  return <span className={classes}>{children}</span>;
};

export default Badge;
