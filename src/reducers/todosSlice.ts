import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../types/state/todos";

const initialState: TodoState = {
  allIds: [],
  byId: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setInitialTodos(state, action) {
      const { allIds, byId } = action.payload;
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
