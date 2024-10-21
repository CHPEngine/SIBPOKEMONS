import classnames from 'classnames';

import styles from './Typography.module.css';
import { FC, ReactNode } from 'react';

interface TitleProps {
  tag?: 'h1' | 'h2' | 'span' | 'div';
  variant?: 'title' | 'sub-title' | 'title-regular' | 'body' | 'sub-body' | 'title-body';
  children: ReactNode;
  className?: string;
}

export const Typography: FC<TitleProps> = ({
  children,
  tag = 'div',
  variant = 'title',
  className
}) => {
  const Component = tag;

  return <Component className={classnames(className, styles[variant])}>{children}</Component>;
};
