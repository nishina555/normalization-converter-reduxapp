import React from "react";
import cx from "classnames";
import { toggleTodo } from "../reducers/todosSlice";
import { TodoItem } from "../types/state/todos";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import styles from "./Todo.module.css";

type TodoProps = {
  todo: TodoItem;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <li
      className={styles.todoItem}
      onClick={() => dispatch(toggleTodo(todo.id))}
    >
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span className={cx(todo && todo.completed && styles.textCompleted)}>
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;
