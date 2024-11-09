import { useEffect, useState } from "react";
import Done from "./components/Done";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Working from "./components/Working";

const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const [finishedTodos, setFinishedTodos] = useState(
    () => JSON.parse(localStorage.getItem("finishedTodos")) || []
  );

  // seEffect에서 return을 사용하는 경우는 보통 "정리" 작업을 할 때이다.
  // 단순히 데이터를 저장하는 것이 목적이라면 return 없이 사용할 수 있다.
  // setTimeout 은 정리를 해주지 않으면 계속 실행되기 때문에 return을 쓴다. ex) clearTimeout

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("finishedTodos", JSON.stringify(finishedTodos))
  }, [todos, finishedTodos]);

  // useEffect(() => {
  //   return localStorage.setItem("finishedTodos", JSON.stringify(finishedTodos));
  // }, [finishedTodos]);

  return (
    <div>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <Working
        todos={todos}
        setTodos={setTodos}
        finishedTodos={finishedTodos}
        setFinishedTodos={setFinishedTodos}
      />
      <Done
        setTodos={setTodos}
        finishedTodos={finishedTodos}
        setFinishedTodos={setFinishedTodos}
      />
    </div>
  );
};

export default App;
