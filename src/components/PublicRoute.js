import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const redirect = isLoggedIn;
  return redirect ? <Navigate to={redirectTo} /> : Component;
}
