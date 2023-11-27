import React from 'react';
import { StyledNav, StyledNavLink } from './Navigation.styled';

import { selectAuthAuthenticated } from 'redux/auth.selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/Navigation/UserMenu';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <header>
      <StyledNav>
        {authenticated ? (
          <>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </StyledNav>
    </header>
  );
};
