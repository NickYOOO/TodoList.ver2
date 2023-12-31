import React from "react";
import { styled } from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};
export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`;
