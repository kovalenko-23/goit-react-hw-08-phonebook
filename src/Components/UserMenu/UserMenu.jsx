import { useDispatch, useSelector } from 'react-redux';
import operationsAuth from '../../redux/auth/auth-operations';
import { Name, Container } from './UserMenu.styled';
import authSelectors from '../../redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Name>Добро пожаловать, {name}</Name>
      <button type="button" onClick={() => dispatch(operationsAuth.logout())}>
        Выйти
      </button>
    </Container>
  );
}
