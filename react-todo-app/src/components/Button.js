import React, { Children } from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, type, variant, ...rest }) {
  return (
    <button
      //   {styles.button}
      className={getClasses([styles[`button--${buttonTypes[variant]}`]])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, variant, ...rest }) {
  return (
    <select
      id="id"
      className={getClasses([styles[`button--${buttonTypes[variant]}`]])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
