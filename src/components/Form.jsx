import React, { useState, useRef } from 'react';
import { styled } from "styled-components";

function Form({ toDos, setToDos }) {

    const initialState = { id: 0, title: "", body: "", isDone: false }
    const [inputToDo, setInputToDo] = useState(initialState)
    const nextId = useRef(3)

    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setInputToDo({ ...inputToDo, [name]: value, id: nextId.current })
        nextId.current++
    }

    const onSunmitHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, inputToDo])
        setInputToDo(initialState)
    }

    return (
        <AddForm onSubmit={onSunmitHandler} >
            <InputGroup>
                <FormLabel>제목</FormLabel>
                <AddInput
                    type="text"
                    name="title"
                    value={inputToDo.title}
                    onChange={onChangeHandler}
                ></AddInput>
                <FormLabel>내용</FormLabel>
                <AddInput
                    type="text"
                    name="body"
                    value={inputToDo.body}
                    onChange={onChangeHandler}
                ></AddInput>
            </InputGroup>
            <AddButton>추가하기</AddButton>
        </AddForm>
    );
};

export default Form

const AddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;    
`
const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;  
`
const AddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`
const AddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;  
`