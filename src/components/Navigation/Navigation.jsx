import React from 'react';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { ReactComponent as IconDoor } from '../../assets/images/DoorOpen.svg';
import { selectAuthAuthenticated } from 'redux/auth.selector';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
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
            <button className="headerBtn" onClick={onLogOut}>
              <IconDoor />
              Log Out
            </button>
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
