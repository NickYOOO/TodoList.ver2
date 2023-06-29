import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function Form() {
  // dispatch 생성
  const dispatch = useDispatch();

  // input을 통해 들어오는 값을 받는 state
  const initialState = { id: 0, title: "", body: "", isDone: false };
  const [inputToDo, setInputToDo] = useState(initialState);
  const todoStore = useSelector((state) => state.todos.dataTodos); //store 연결확인
  // id값 주기
  const nextId = useRef(3);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputToDo({ ...inputToDo, [name]: value, id: nextId.current });
  };
  // form의 onSubmit 이벤트 핸들러. 클릭하면 form의 명령을 dispatch에 담아 보냄
  const onSunmitHandler = (e) => {
    e.preventDefault();
    nextId.current++; //submit 버튼을 누를 때 아이디 값을 하나씩 증가시킴
    //dispatch에 액션을 담아서 리듀서로 보낸다. 여기서 보낸 값이 액션객체의 payload에 들어감
    dispatch(addTodo([...todoStore, inputToDo]));
    setInputToDo(initialState); //이벤트가 끝나고 초기화-> input창을 빈칸으로 만들어 주는 역할
  };

  return (
    <StForm onSubmit={onSunmitHandler}>
      <StInputGroup>
        <StLabel>제목</StLabel>
        <StInput
          type="text"
          name="title"
          value={inputToDo.title}
          onChange={onChangeHandler}
          required
        ></StInput>
        <StLabel>내용</StLabel>
        <StInput
          type="text"
          name="body"
          value={inputToDo.body}
          onChange={onChangeHandler}
          required
        ></StInput>
      </StInputGroup>
      <StButton>추가하기</StButton>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.color};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StLabel = styled.label`
  font-size: 1rem;
  font-weight: 700;
`;
const StInput = styled.input`
  height: 40px;
  width: 240px;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 12px;
  padding: 0 12px;
`;
const StButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.color};
  width: 140px;
  color: ${(props) => props.theme.color};
  font-weight: 700;
`;
