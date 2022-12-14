import React from "react";
import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([{
    id: 0,
    name: "",
    isCompleted: false
  }]);
  const [inputValue, setInputValue] = useState('')

  const addTodos = () => {
    setTodos([...todos, {
        id:1,
        name: inputValue,
        isCompleted: true
    }])
  }
  console.log(todos)
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
        <div>
          <button onClick={addTodos}>Add</button>
        </div>
      </div>
      {todos.map((todo) => {
        return <div>{todo.name}</div>;
      })}
    </div>
  );
}
