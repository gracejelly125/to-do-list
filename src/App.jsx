import Done from "./components/Done";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Working from "./components/Working";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  // 내가 구독하고 있는 대상이 바뀌면 리렌더링 하겠다.
  return (
    <div>
      <Header />
      <TodoProvider>
        <TodoList />
        <Working />
        <Done />
      </TodoProvider>
    </div>
  );
};

export default App;
