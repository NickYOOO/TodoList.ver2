import React from 'react';
// Router를 사용하기 위한 코드 import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 페이지 컴포넌트를 import
import Main from '../pages/Main';
import Detail from '../pages/Detail';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* path에 각 id별 Detail페이지로 갈 수 있는 주소 넣어주기 */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
