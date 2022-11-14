import { useSelector, useDispatch } from 'react-redux';
import selectUser from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import css from '../UserMenu/UserMenu.module.scss';

export default function UserMenu() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div display="flex" alignItems="center">
      <p style={css.name}>Wellcome, {name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.submitButton}
      >
        LogOut
      </button>
    </div>
  );
}
