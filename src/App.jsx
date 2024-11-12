import { useSelector } from "react-redux";
import Done from "./components/Done";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Working from "./components/Working";
import { useEffect } from "react";

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
      <TodoList />
      <Working />
      <Done />
    </>
  );
};

export default App;
