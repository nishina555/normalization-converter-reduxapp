import { FC, useEffect } from "react";
import Todo from "./Todo";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { TodoEntity } from "../types/state/todos";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TodoList.module.css";
import { AppDispatch } from "../store";
import { setInitialTodos } from "../reducers/todosSlice";

const TodoList: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos: Array<TodoEntity> = useSelector(selectTodosByVisibilityFilter);

  useEffect(() => {
    const todos = {
      allIds: [1, 2],
      byId: {
        1: {
          id: 1,
          content: "go somewhere",
          completed: true,
        },
        2: {
          id: 2,
          content: "eat something",
          completed: false,
        },
      },
    };
    dispatch(setInitialTodos(todos));
  }, [dispatch]);

  return (
    <ul className={styles.todoList}>
      {todos && todos.length
        ? todos.map((todo: TodoEntity, index: number) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
