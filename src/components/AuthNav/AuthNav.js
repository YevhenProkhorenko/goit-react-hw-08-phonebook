import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.scss';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={css.Link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.Link}>
        Login
      </NavLink>
    </div>
  );
}
