import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./feature/todo/todoSlice";

const List = () => {
    const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {todos.map((item, idx) => (
        <li key={idx}>
          {" "}
          {idx} {item.name} {item.email}{" "}
          <button>update</button>{" "}
          <button onClick={() => dispatch(removeTodo(idx))}>delete</button>{" "}
        </li>
      ))}
    </div>
  );
};

export default List;
