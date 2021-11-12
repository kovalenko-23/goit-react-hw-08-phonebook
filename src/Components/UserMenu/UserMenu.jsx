import { useDispatch, useSelector } from 'react-redux';
import operationsAuth from '../../redux/auth/auth-operations';
import { Name, Container } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.authReducer.user.name);

  return (
    <Container>
      <Name>Добро пожаловать, {name}</Name>
      <button type="button" onClick={() => dispatch(operationsAuth.logout())}>
        Выйти
      </button>
    </Container>
  );
}
