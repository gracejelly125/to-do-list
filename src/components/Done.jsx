import { useDispatch, useSelector } from "react-redux";
import { Container, StyleBox } from "../styled-components/styled-todoList";
import { deleteFinishedTodo } from "../redux/slices/doneSlice";
import { addTodo } from "../redux/slices/workingSlice";
import TodoItem from "./Working";

const Done = () => {
  const todos = useSelector((state) => state.working);
  const finishedTodos = useSelector((state) => state.done);
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoToDelete) => {
    dispatch(deleteFinishedTodo(todoToDelete));
  };

  const handleCancelTodo = (todoToCancel) => {
    dispatch(deleteFinishedTodo(todoToCancel));
    const canceledTodo = finishedTodos.find((todo) => todo.id === todoToCancel);
    if (canceledTodo) {
      dispatch(addTodo(canceledTodo));
    }
  };

  return (
    <>
      <StyleBox>
        <p>Done 🎁</p>
        <Container>
          {finishedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              buttonText={"취소"}
              deleteButtonHandler={handleDeleteTodo}
              cancelButtonHandler={handleCancelTodo}
            />
          ))}
        </Container>
      </StyleBox>
    </>
  );
};

export default Done;
