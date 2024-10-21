import styles from './Divider.module.css';
import { FC } from 'react';

interface DividerProps {
  title: string;
}

export const Divider: FC<DividerProps> = ({ title }) => (
  <div className={styles.container}>
    <div className={styles.line} />
    <span className={styles.title}>{title}</span>
    <div className={styles.line} />
  </div>
);
