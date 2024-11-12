import { useSelector } from "react-redux";
import Header from "./components/Header";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Working from "./components/Working";
import Done from "./components/Done";

const App = () => {
  const todos = useSelector((state) => state.working);
  const finishedTodos = useSelector((state) => state.done);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("finishedTodos", JSON.stringify(finishedTodos));
  }, [todos, finishedTodos]);

  return (
    <>
      <Header />
      <TodoForm />
      <Working />
      <Done />
    </>
  );
};

export default App;
