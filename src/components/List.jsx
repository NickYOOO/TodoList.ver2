import React from 'react'
import { styled } from "styled-components";
import ToDo from './ToDo';

function List({ toDos, setToDos }) {

    const deleteHandler = (selectedId) => {
        const remainedTodos = toDos.filter((toDo) => {
            return toDo.id !== selectedId
        })
        setToDos(remainedTodos)
    }

    const completeHandler = (selectedId) => {
        const completeTodo = toDos.map((toDo) => {
            if (toDo.id === selectedId) {
                return { ...toDo, isDone: !toDo.isDone }
            } else {
                return { ...toDo }
            }
        })
        setToDos(completeTodo)
    }

    return (
        <Listcontainer>
            <h2>Working..🔥</h2>
            <ListWrapper>
                {toDos.map((toDo) => {
                    if (toDo.isDone === false) {
                        return (
                            <ToDo
                                toDo={toDo}
                                key={toDo.id}
                                setToDos={setToDos}
                                deleteHandler={deleteHandler}
                                completeHandler={completeHandler}
                            />
                        );
                    }
                })}
            </ListWrapper>
            <h2>Done..!👍🏻</h2>
            <ListWrapper>
                {toDos.map((toDo) => {
                    if (toDo.isDone === true) {
                        return (
                            <ToDo
                                toDo={toDo}
                                key={toDo.id}
                                setToDos={setToDos}
                                deleteHandler={deleteHandler}
                                completeHandler={completeHandler}
                            />
                        );
                    }
                })}
            </ListWrapper>
        </Listcontainer>
    );
}

export default List

const Listcontainer = styled.div`
  padding: 0 24px;
`
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`