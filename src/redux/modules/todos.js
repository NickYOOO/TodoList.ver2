// action value
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const UPDATE_TODO = 'todos/UPDATE_TODO';
// action creator : action value를 return하는 함수
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = {
  dataTodos: JSON.parse(localStorage.getItem('Main')) ?? [],
};

// 리듀서 : state에 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수이다.

// input으로 받는 2가지 : state , action
// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다.
// ex : payload가 3이다. 3만큼을 plus!
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // 기존 state를 복제해서 그 뒤에 새로운 객체를 추가
      const newTodo = { ...state, dataTodos: action.payload };
      return newTodo;

    case DELETE_TODO:
      // filter를 통해 id가 일치하는 내용들을 삭제!
      const remainedTodo = {
        ...state,
        dataTodos: state.dataTodos.filter((todo) => todo.id !== action.payload),
      };
      return remainedTodo;

    case UPDATE_TODO:
      return {
        ...state,
        dataTodos: state.dataTodos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    // state.map((todo) => {
    //   if (todo.id === action.payload) {
    //     // id가 일치하는 곳에서
    //     return { ...todo, isDone: !todo.isDone }; //isDone의 값을 반대로(false->true or true->false) 바꿔주는 로직 구현
    //     // 마찬가지로 객체의 불변성을 지켜줘야 되니까 전개연산자(...)를 이용해 기존 내용을 복사해서 사용
    //   } else {
    //     // id가 일치하지 않는다면? 그냥 그대로...
    //     return { ...todo };
    //   }
    // });
    // return updatedTodo;

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
