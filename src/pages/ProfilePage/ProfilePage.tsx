import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Button, PokemonShortCard, Spinner, Typography, UserCard } from '@common';
import { ROUTES } from '@utils/constants';
import { INITIAL_STORE, useStore } from '@utils/contexts';
import { useAuthState, useLogoutMutation } from '@utils/firebase';

import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
  const { setStore } = useStore();
  const navigate = useNavigate();
  const authState = useAuthState();
  const logoutMutation = useLogoutMutation();

  if (!authState.data) return <Spinner />;
  const user = authState.data;

  return (
    <div className={classnames('page', styles.profile_container)}>
      <UserCard user={user} />
      <div>
        <Typography variant='title'>Team</Typography>
        <div className={styles.team}>
          {user.pokemons.map((pokemon) => (
            <PokemonShortCard key={pokemon.id} name={pokemon.name} />
          ))}
        </div>
      </div>
      <Button
        onClick={() => {
          logoutMutation.mutate(
            {},
            {
              onSuccess: () => {
                setStore(INITIAL_STORE);
                navigate(ROUTES.AUTH); // Навигация после успешного завершения мутации
              }
            }
          );
          setStore(INITIAL_STORE);
          return navigate(ROUTES.AUTH);
        }}
      >
        LOGOUT
      </Button>
    </div>
  );
};
