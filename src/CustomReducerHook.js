import React, { useReducer } from "react";

const initialTodos = [
  {
    id: "a",
    task: "Learn React",
    complete: true,
  },
  {
    id: "b",
    task: "Learn Firebase",
    complete: false,
  },
];
const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const CustomReducerHook = () => {
  const [currentTodos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleChange = (e, todo) => {
    dispatch({
      type: todo.complete ? "DO_TODO" : "UNDO_TODO",
      id: todo.id,
    });
  };

  return (
    <ul>
      {initialTodos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={(e) => handleChange(e, todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CustomReducerHook;
