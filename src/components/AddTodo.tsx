import React, { useState } from "react";
import { addTodo } from "../reducers/todosSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState("");

  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className={styles.addTodo} onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
