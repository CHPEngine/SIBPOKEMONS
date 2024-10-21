import { ReactComponent as GoogleIcon } from '@assets/img/icons/google.svg';

import { Button, ButtonProps } from '../Button/Button';
import { FC } from 'react';

type GoogleButtonProps = ButtonProps;

export const GoogleButton: FC<GoogleButtonProps> = ({ children, ...props }) => (
  <Button {...props} variant='text' startIcon={<GoogleIcon />}>
    {children}
  </Button>
);
