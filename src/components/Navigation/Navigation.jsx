import React from 'react';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { ReactComponent as IconDoor } from '../../assets/images/DoorOpen.svg';

export const Navigation = () => {
  //   const dispatch = useDispatch()

  const onLogOut = () => {
    //     dispatch(logOutThunk());
  };

  return (
    <header>
      <StyledNav>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>

        <StyledNavLink to="/login">Login</StyledNavLink>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <button className="headerBtn" onClick={onLogOut}>
          <IconDoor />
          Log Out
        </button>
      </StyledNav>
    </header>
  );
};
