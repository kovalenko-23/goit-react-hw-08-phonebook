import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Bar = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a363b;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 600px;
  font-weight: 600;
  color: #a0a0a0;
  &:focus {
    color: #000000;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
