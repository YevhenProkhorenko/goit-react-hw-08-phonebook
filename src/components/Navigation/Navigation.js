import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from '../Navigation/Navigation.module.scss';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={css.Link}>
        Главная
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.Link}>
          Заметки
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
