import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
