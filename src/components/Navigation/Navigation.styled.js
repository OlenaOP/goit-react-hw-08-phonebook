import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #111;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 10px 60px;
  border-radius: 40px;
  border: 2px solid #4f2ee8;
  margin-right: 15px;

  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: #4f2ee8;
    -webkit-box-shadow: 0 2px 12px -6px #cc292f;
    box-shadow: 0 2px 12px -6px #cc292f;
    color: white;
  }

  &.active {
    text-decoration: underline;
    background-color: #4f2ee8;
    color: white;
  }
`;

export const StyledNav = styled.nav`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 10px;
  display: flex;

  .headerBtn {
    color: #111;
    background-color: #dddddd;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 40px;
    border: 2px solid #4f2ee8;
    margin-right: 15px;
    display: flex;
    gap: 10px;
    align-items: center;
    transition: all 0.3s;

    &:hover,
    &:focus {
      background-color: #4f2ee8;
      -webkit-box-shadow: 0 2px 12px -6px #cc292f;
      box-shadow: 0 2px 12px -6px #cc292f;
      color: white;
    }
  }
`;
