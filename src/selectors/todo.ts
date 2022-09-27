import { AppState } from "../store/index";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoState } from "../types/state/todos";
import { createSelector } from "@reduxjs/toolkit";
import { selectVisibilityFilter } from "./visibilityFilter";

const selectEntityTodos = (state: AppState): TodoState => state.entities.todos;
const selectTodoIds = createSelector(
  [selectEntityTodos],
  (todos) => todos.allIds
);
const selectTodosById = createSelector(
  [selectEntityTodos],
  (todos) => todos.byId
);

const selectTodos = createSelector(
  [selectTodoIds, selectTodosById],
  (todoIds, todos) => todoIds.map((id) => todos[id])
);

export const selectTodosByVisibilityFilter = createSelector(
  [selectTodos, selectVisibilityFilter],
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return todos.filter((todo) => !todo.completed);
      case VISIBILITY_FILTERS.ALL:
      default:
        return todos;
    }
  }
);
