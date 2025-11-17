import React from 'react';
import classNames from 'classnames';

/**
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'} [props.variant]
 * @param {'small'|'normal'|'large'} [props.size]
 * @param {React.ReactNode} props.children
 */
const Button = ({ variant = 'primary', size = 'normal', children, className, ...rest }) => {
  const classes = classNames('button', className, {
    'is-primary': variant === 'primary',
    'is-link is-light': variant === 'secondary',
    'is-dark is-light': variant === 'ghost',
    'is-small': size === 'small',
    'is-medium': size === 'large',
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
