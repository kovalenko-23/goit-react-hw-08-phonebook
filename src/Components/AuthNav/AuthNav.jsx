import React from 'react';
import { StyledLink, Container } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Container>
      <StyledLink to="/registration" exact="true">
        Регистрация
      </StyledLink>
      <StyledLink to="/login" exact="true">
        Логин
      </StyledLink>
    </Container>
  );
}
