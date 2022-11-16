import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../LoginPage/LoginPage.module.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Log in is success');
    dispatch(logIn({ email, password }));
  };

  return (
    <div className={css.wrapper}>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="on">
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={css.submitButton}>
          LogIn
        </button>
        <ToastContainer autoClose={1000} theme="colored" />
      </form>
    </div>
  );
}
