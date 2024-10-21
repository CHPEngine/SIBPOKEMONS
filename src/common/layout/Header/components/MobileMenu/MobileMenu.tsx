import { Link, useNavigate } from 'react-router-dom';

import { Button, Divider, ThemeButton, Typography, UserCard } from '@common';
import { ROUTES } from '@utils/constants';
import { INITIAL_STORE, useStore } from '@utils/contexts';
import { useAuthState, useLogoutMutation } from '@utils/firebase';

import { Burger } from '../Burger/Burger';

import styles from './MobileMenu.module.css';
import { useState } from 'react';

export const MobileMenu = () => {
  const { setStore } = useStore();
  const authState = useAuthState();
  const navigate = useNavigate();

  const logoutMutation = useLogoutMutation();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.mobile_header_container}>
      <div className={styles.mobile_header}>
        <Typography variant='title'>Pokemon</Typography>
        <div className={styles.menu_container}>
          <ThemeButton />
          <Burger isActive={isActive} onClick={() => setIsActive(!isActive)} />
        </div>
      </div>

      {isActive && (
        <div className={styles.navmenu}>
          {authState.data && <UserCard user={authState.data} setIsActive={setIsActive} />}
          <Divider title='NAVIGATION' />
          <nav>
            <ul aria-hidden onClick={() => setIsActive(false)} className={styles.navigation}>
              <li>
                <Typography variant='title-regular'>
                  <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                </Typography>
              </li>
              {authState.data?.uid && (
                <>
                  <li>
                    <Typography variant='title-regular'>
                      <Link to={ROUTES.PROFILE}>Profile</Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='title-regular'>
                      <Link to={ROUTES.SETTINGS}>Settings</Link>
                    </Typography>
                  </li>
                </>
              )}
              <li>
                <Typography variant='title-regular'>
                  <Link to={ROUTES.USERS}>Users</Link>
                </Typography>
              </li>
            </ul>
          </nav>

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
              navigate(ROUTES.AUTH);
            }}
          >
            LOGOUT
          </Button>
        </div>
      )}
    </div>
  );
};
