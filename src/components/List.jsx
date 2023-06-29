import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos"; // 액션객체
import { useNavigate } from "react-router-dom";

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos.dataTodos); //store 연결확인

  useEffect(() => {
    window.localStorage.setItem("Main", JSON.stringify(todoStore));
  }, [todoStore]);
  // dispatch로 명령 전달
  const deleteHandler = (selectedId) => {
    dispatch(deleteTodo(selectedId));
  };

  const completeHandler = (selectedId) => {
    dispatch(updateTodo(selectedId));
  };

  return (
    <StListcontainer>
      <h2>Working..🔥</h2>
      <StListWrapper>
        {todoStore.map((toDo) => {
          if (toDo.isDone === false) {
            return (
              <TodoContainer key={toDo.id}>
                <div>
                  <StDetailBtn onClick={() => navigate(`/detail/${toDo.id}`)}>
                    + 상세내용
                  </StDetailBtn>
                  <h2>{toDo.title}</h2>
                  <div>{toDo.body}</div>
                </div>
                <ButtonSet>
                  <DeleteButton onClick={() => deleteHandler(toDo.id)}>
                    삭제하기
                  </DeleteButton>
                  <CompleteButton onClick={() => completeHandler(toDo.id)}>
                    {toDo.isDone ? "취소" : "완료"}
                  </CompleteButton>
                </ButtonSet>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2>Done..!👍🏻</h2>
      <StListWrapper>
        {todoStore.map((toDo) => {
          if (toDo.isDone === true) {
            return (
              <TodoContainer key={toDo.id}>
                <div>
                  <StDetailBtn onClick={() => navigate(`/detail/${toDo.id}`)}>
                    + 상세내용
                  </StDetailBtn>
                  <h2>{toDo.title}</h2>
                  <div>{toDo.body}</div>
                </div>
                <ButtonSet>
                  <DeleteButton onClick={() => deleteHandler(toDo.id)}>
                    삭제하기
                  </DeleteButton>
                  <CompleteButton onClick={() => completeHandler(toDo.id)}>
                    {toDo.isDone ? "취소" : "완료"}
                  </CompleteButton>
                </ButtonSet>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListcontainer>
  );
}

export default List;

const StListcontainer = styled.div`
  padding: 0 24px;
`;
const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TodoContainer = styled.div`
  border: 4px solid ${(props) => props.theme.color};
  width: 270px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;
//Button 컴포넌트를 인자로 받아 확장하는 방법 (장점 : 재사용, 동적인 스타일링 구현)
const DeleteButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const CompleteButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const StDetailBtn = styled.button`
  float: right; // 오른쪽 상단으로 버튼을

  box-sizing: border-box;

  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};

  padding: 5px 10px;
  width: 90px;

  cursor: pointer;

  &:hover {
    background-color: #2b292964;
  }
`;
