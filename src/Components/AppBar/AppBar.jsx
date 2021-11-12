import { useSelector } from 'react-redux';
import { Bar, StyledLink, Container } from './AppBar.styled';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Bar>
      {isLoggedIn ? (
        <Container>
          <StyledLink to="/contacts" exact="true">
            Contacts
          </StyledLink>
          <UserMenu />
        </Container>
      ) : (
        <AuthNav />
      )}
    </Bar>
  );
}
