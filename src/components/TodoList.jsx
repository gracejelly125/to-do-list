import { useDispatch, useSelector } from "react-redux";
import { Container, Msg, StyleBox } from "../styled-components/styled-todoList";
import TodoItem from "./TodoItem";
import { deleteTodo, updateTodo } from "../redux/slices/TodoSlice";

const TodoList = ({ isWorking }) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoToDelete) => {
    dispatch(deleteTodo(todoToDelete));
  };

  const handleFinishTodo = (todoToFinish) => {
    const updatedTodo = { ...todoToFinish, finished: !todoToFinish.finished };
    dispatch(
      updateTodo({ id: todoToFinish.id, finished: updatedTodo.finished })
    );

    console.log("updatedTodos =>", updatedTodo);
  };


  const workingTodos = todos.filter((todo) => !todo.finished);
  const finishedTodos = todos.filter((todo) => todo.finished);

  return (
    <>
      <StyleBox>
        <p>Working 🎄</p>
        {workingTodos.length === 0 ? (
          <Msg>아직 등록된 리스트가 없습니다. 할 일을 추가해보세요!</Msg>
        ) : (
          <Container>
            {workingTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                buttonText={"완료"}
                deleteButtonHandler={handleDeleteTodo}
                cancelButtonHandler={handleFinishTodo}
              />
            ))}
          </Container>
        )}
      </StyleBox>
      <StyleBox>
        <p>Finished 🎁</p>
        {finishedTodos.length === 0 ? (
          <Msg>아직 완료된 리스트가 없습니다.</Msg>
        ) : (
          <Container>
            {finishedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                buttonText={"취소"}
                deleteButtonHandler={handleDeleteTodo}
                cancelButtonHandler={handleFinishTodo}
              />
            ))}
          </Container>
        )}
      </StyleBox>
    </>
  );
};

export default TodoList;
