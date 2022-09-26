import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../types/state/todos";

let nextTodoId = 0;

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
    addTodo(state, action) {
      const content = action.payload;
      let id = ++nextTodoId;

      state.allIds.push(id);
      state.byId[id] = {
        id,
        content,
        completed: false,
      };
    },
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.byId[id];
      todo.completed = !todo.completed;
    },
  },
});

export const { setInitialTodos, addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
