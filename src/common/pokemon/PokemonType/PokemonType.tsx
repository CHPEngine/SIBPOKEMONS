import classnames from 'classnames';

import styles from './PokemonType.module.css';
import { FC } from 'react';

interface PokemonTypeProps {
  type: PokemonType['type'];
}

export const PokemonType: FC<PokemonTypeProps> = ({ type }) => (
  <div className={classnames(styles[type.name], styles.type)}>{type.name}</div>
);
