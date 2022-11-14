import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshingUser,
} from 'redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLogIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const redirect = !isLogIn && !isRefreshing;
  return redirect ? <Navigate to={redirectTo} /> : Component;
}
