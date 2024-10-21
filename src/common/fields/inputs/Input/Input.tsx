import classnames from 'classnames';

import styles from './Input.module.css';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  isLoading?: boolean;
  error?: string;
}

export const Input: FC<InputProps> = forwardRef(
  ({ id, placeholder, error, ...props }, inputRef) => (
    <label htmlFor={id}>
      <div className={styles.label}>{placeholder}</div>
      <input
        className={classnames(styles.input, { [styles.input_error]: !!error })}
        id={id}
        ref={inputRef}
        {...props}
      />
      <span className={styles.error}>{error}</span>
    </label>
  )
);
