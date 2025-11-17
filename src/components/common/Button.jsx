import React from 'react';
import classNames from 'classnames';

/**
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'} [props.variant]
 * @param {'small'|'normal'|'large'} [props.size]
 * @param {React.ReactNode} props.children
 */
const Button = ({ variant = 'primary', size = 'normal', children, className, ...rest }) => {
  const classes = classNames('btn', `btn-${variant}`, className, {
    'btn--sm': size === 'small',
    'btn--lg': size === 'large',
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
