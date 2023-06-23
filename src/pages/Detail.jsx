import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  // useParams는 path에 있는 id값을 조회할 수 있게 해주는 훅
  const param = useParams();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos.dataTodos)

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : {param.id}</div>
            <StButton
              onClick={() => {
                navigate("/");
              }}
            >
              🏠 메인페이지로
            </StButton>
          </StDialogHeader>
          {todoStore.map(((toDo) => {
            if (toDo.id === parseInt(param.id)) {
              return (
                <div>
                  <StTitle>{toDo.title}</StTitle>
                  <StBody>{toDo.body}</StBody>
                </div>
              );
            } else {
              return null;
            }
          }))
          }

        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid #fff;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
