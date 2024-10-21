import classnames from 'classnames';

import styles from './IconButton.module.css';
import { ComponentPropsWithRef, FC, ReactNode } from 'react';

type IconButtonVariant = 'contained' | 'outlined' | 'icon';
export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: IconButtonVariant;
  icon: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({
  variant = 'contained',
  disabled,
  icon,
  ...props
}) => {
  const classes = classnames(styles.button, styles[variant]);

  return (
    <button className={classes} disabled={disabled} aria-disabled={disabled} {...props}>
      {icon}
    </button>
  );
};
