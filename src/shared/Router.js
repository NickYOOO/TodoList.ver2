import React from "react";
// Router를 사용하기 위한 코드 import
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 페이지 컴포넌트를 import
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { styled } from "styled-components";

function Router() {
  return (
    <SDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* path에 각 id별 Detail페이지로 갈 수 있는 주소 넣어주기 */}
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </SDiv>
  );
}

const SDiv = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Router;
