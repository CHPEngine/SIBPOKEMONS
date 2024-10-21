import { PokemonType } from '../PokemonType/PokemonType';

import styles from './PokemonTypes.module.css';
import { FC } from 'react';

interface PokemonTypesProps {
  types: PokemonType[];
}

export const PokemonTypes: FC<PokemonTypesProps> = ({ types }) => (
  <div className={styles.types}>
    {types.map(({ type }) => (
      <PokemonType key={type.name} type={type} />
    ))}
  </div>
);
