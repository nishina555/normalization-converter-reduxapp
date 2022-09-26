import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

export default function TodoApp() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
      <VisibilityFilters />
    </>
  );
}
