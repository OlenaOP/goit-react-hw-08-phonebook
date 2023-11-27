import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';
import { ReactComponent as IconDoor } from '../../assets/images/DoorOpen.svg';
import { selectAuthUserData } from 'redux/auth.selectors';
import { StyledDiv } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <StyledDiv>
      <p>{user.email}</p>
      <button className="headerBtn" onClick={onLogOut}>
        <IconDoor />
        Log Out
      </button>
    </StyledDiv>
  );
};
