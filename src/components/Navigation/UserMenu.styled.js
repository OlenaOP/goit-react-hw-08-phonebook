import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: #dedede;
  border-radius: 40px;
  border: 2px solid #4f2ee8;
  padding: 10px;
  display: flex;
  gap: 30px;
  p {
    display: inline-block;
  }
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
