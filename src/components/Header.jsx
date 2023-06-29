import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LightTheme } from "../redux/modules/Theme";

function Header() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <StHeader>
      <div>My To do List</div>
      <StButton onClick={() => dispatch({ type: "toggleTheme" })}>
        {theme === LightTheme ? "DarkTheme" : "LightTheme"}
      </StButton>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StButton = styled.button`
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color};
  width: 140px;
  color: ${(props) => props.theme.backgroundColor};
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
