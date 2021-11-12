import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  margin-right: 50px;
  color: #a0a0a0;
  &:focus {
    color: #000000;
  }
`;

export const Container = styled.div`
  padding-left: 50 px;
`;
