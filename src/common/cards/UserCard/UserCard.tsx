import { useNavigate } from 'react-router-dom';

import styles from './UserCard.module.css';
import { setDefaultImage } from '@utils/helpers';
import { FC } from 'react';

interface UserCardProps {
  user: User;
  setIsActive?: (isActive: boolean) => void;
}

export const UserCard: FC<UserCardProps> = ({ user, setIsActive }) => {
  const navigate = useNavigate();
  const { pokemons } = user;

  const pokemonClick = (pokemon: User['pokemons'][number]) => {
    if (setIsActive) setIsActive(false);
    return navigate(`/pokemon/${pokemon.id}`);
  };
  return (
    <div className='card'>
      <div className={styles.content}>
        <div className={styles.body}>
          {user.photoURL && (
            <img
              src='https://lh3.googleusercontent.com/a/ACg8ocK9pYQtmHayDZvRBtZGRiUp0LaMMN3eb5xjPvzRhuxc9rUCGA=s96-c'
              alt='photoURL'
              onError={setDefaultImage}
            />
          )}

          <div>
            <div className={styles.display_name}>{user.displayName}</div>
            <div className={styles.data}>{user.email}</div>
          </div>
        </div>

        {!!pokemons.length && (
          <div className={styles.pokemons}>
            {pokemons.map((pokemon) => (
              <div key={pokemon.id} className={styles.pokemon}>
                <div
                  role='button'
                  tabIndex={0}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') pokemonClick(pokemon);
                  }}
                  onClick={() => pokemonClick(pokemon)}
                >
                  <img src={pokemon.image || ''} alt={pokemon.name} />{' '}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
