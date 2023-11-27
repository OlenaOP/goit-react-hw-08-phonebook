import React from 'react';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { ReactComponent as IconDoor } from '../../assets/images/DoorOpen.svg';
import {
  selectAuthAuthenticated,
  selectAuthUserData,
} from 'redux/auth.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';
import { UserMenu } from 'components/Navigation/UserMenu';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

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
