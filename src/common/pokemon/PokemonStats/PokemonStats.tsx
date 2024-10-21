import styles from './PokemonStats.module.css';
import { FC } from 'react';

interface PokemonStatsProps {
  title: string;
  stats: string[];
}

export const PokemonStats: FC<PokemonStatsProps> = ({ title, stats }) => (
  <div className='card'>
    <div className={styles.title}>{title}</div>
    <ul className={styles.stats}>
      {stats.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);
