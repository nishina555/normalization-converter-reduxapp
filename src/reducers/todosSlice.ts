import { createSlice } from "@reduxjs/toolkit";
import { buildEntities } from "../lib/entitiesBuilder";
import { Entities } from "../types/state/base";
import { TodoEntity } from "../types/state/todos";

const initialState: Entities<TodoEntity> = {
  allIds: [],
  byId: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setInitialTodos(state, action) {
      const { allIds, byId } = buildEntities<TodoEntity>(action.payload);
      state.allIds = allIds;
      state.byId = byId;
    },
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.byId[id];
      todo.completed = !todo.completed;
    },
  },
});

export const { setInitialTodos, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
