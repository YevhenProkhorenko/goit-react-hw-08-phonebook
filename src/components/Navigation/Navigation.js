import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import css from '../Navigation/Navigation.module.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={css.Link}>
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.Link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
