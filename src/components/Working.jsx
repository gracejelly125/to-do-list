import { Container, Msg, StyleBox } from "../styled-components/styled-todoList";
import { useDispatch, useSelector } from "react-redux";
import { addFinishedTodo } from "../redux/slices/doneSlice";
import { deleteTodo } from "../redux/slices/workingSlice";
import TodoItem from "./TodoItem";

const Working = () => {
  const todos = useSelector((state) => state.working);
  const finishedTodos = useSelector((state) => state.done);
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoToDelete) => {
    dispatch(deleteTodo(todoToDelete));
  };

  const handleFinishTodo = (todoToFinish) => {
    dispatch(deleteTodo(todoToFinish));
    const finishedTodo = todos.find((todo) => todo.id === todoToFinish);
    if (finishedTodo) {
      dispatch(addFinishedTodo(finishedTodo));
    }
  };

  return (
    <>
      <StyleBox>
        <p>Working 🎄</p>
        {todos.length === 0 ? (
          <Msg>아직 등록된 리스트가 없습니다. 할 일을 추가해보세요!</Msg>
        ) : (
          <Container>
            {todos.map((todo) => (
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
    </>
  );
};

export default Working;
