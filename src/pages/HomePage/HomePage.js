import React from 'react';
import css from '../HomePage/HomePage.module.scss';

const HomePage = () => (
  <div className={css.container}>
    <h1 className={css.title}>Welcome to phone book</h1>
    <p>To view contacts, log in to your account</p>
  </div>
);

export default HomePage;
