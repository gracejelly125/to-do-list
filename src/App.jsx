import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [isWorking, setIsWorking] = useState(true);

  return (
    <>
      <Header />
      <TodoForm isWorking={isWorking} />
      <TodoList isWorking={isWorking} setIsWorking={setIsWorking} />
    </>
  );
};

export default App;
