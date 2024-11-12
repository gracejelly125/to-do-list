import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Container,
  Content,
  StyleBox,
  StyleWorking,
  Title,
} from "../styled-components/styled-todoList";
import { deleteFinishedTodo } from "../redux/slices/doneSlice";
import { addTodo } from "../redux/slices/workingSlice";

const Done = () => {
  const todos = useSelector((state) => state.working);
  const finishedTodos = useSelector((state) => state.done);
  const dispatch = useDispatch();

  const DeleteTodoHandler = (todoToDelete) => {
    dispatch(deleteFinishedTodo(todoToDelete));
  };

  const cancelTodoHandler = (todoToCancel) => {
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
            <StyleWorking key={todo.id}>
              <Title>{todo.title}</Title>
              <Content>{todo.content}</Content>
              <ButtonGroup>
                <Button
                  type="button"
                  onClick={() => DeleteTodoHandler(todo.id)}
                >
                  삭제하기
                </Button>
                <Button
                  type="button"
                  onClick={() => cancelTodoHandler(todo.id)}
                >
                  취소
                </Button>
              </ButtonGroup>
            </StyleWorking>
          ))}
        </Container>
      </StyleBox>
    </>
  );
};

export default Done;
