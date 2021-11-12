import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import authSelectors from '../redux/auth/auth-selectors';

export default function Publick({ children, restricted, redirectTo = '/' }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo}/> : children;
}
