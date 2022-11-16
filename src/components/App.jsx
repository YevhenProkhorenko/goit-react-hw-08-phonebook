import { Suspense, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsRefreshingUser } from 'redux/auth/authSelectors';
import AppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
