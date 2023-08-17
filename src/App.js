import React, { useState, useRef } from "react";

import "./App.css";

function TodoApp({ addTodo, modifyTodo, removeTodo, todos }) {
  const onBtnAddTodoClick = () => {
    addTodo("안녕");
  };

  const onBtnModifyTodoClick = () => {
    modifyTodo(1, "ㅋㅋㅋ");
  };

  const onBtnDeleteTodoClick = () => {
    removeTodo(1);
  };

  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <button onClick={onBtnModifyTodoClick}>수정</button>
      <button onClick={onBtnDeleteTodoClick}>삭제</button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {todo.content} {todo.regDate}
          </li>
        ))}
      </ul>
    </>
  );
}

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-01-17 12:12:12",
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    modifyTodo,
  };
}

function App() {
  const {addTodo, removeTodo, modifyTodo, todos} = useTodosState();
  
  return (
    <>
      <TodoApp
        addTodo={addTodo}
        modifyTodo={modifyTodo}
        removeTodo={removeTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
