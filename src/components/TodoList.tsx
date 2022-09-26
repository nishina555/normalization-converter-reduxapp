import { FC } from "react";
import Todo from "./Todo";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { TodoItem } from "../types/state/todos";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";

const TodoList: FC = () => {
  const todos: Array<TodoItem> = useSelector(selectTodosByVisibilityFilter);

  return (
    <ul className={styles.todoList}>
      {todos && todos.length
        ? todos.map((todo: TodoItem, index: number) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
