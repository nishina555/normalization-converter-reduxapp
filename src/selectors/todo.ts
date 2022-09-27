import { AppState } from "../store/index";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { TodoEntity } from "../types/state/todos";
import { createSelector } from "@reduxjs/toolkit";
import { selectVisibilityFilter } from "./visibilityFilter";
import { Entities } from "../types/state/base";

const selectTodoEntities = (state: AppState): Entities<TodoEntity> =>
  state.entities.todos;
const selectTodoIds = createSelector(
  [selectTodoEntities],
  (todos) => todos.allIds
);
const selectTodosById = createSelector(
  [selectTodoEntities],
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
