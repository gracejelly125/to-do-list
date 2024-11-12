import {
  Button,
  ButtonGroup,
  Container,
  Content,
  StyleBox,
  StyleWorking,
  Title,
} from "../styled-components/styled-todoList";
import { useDispatch, useSelector } from "react-redux";
import { addFinishedTodo } from "../redux/slices/doneSlice";
import { deleteTodo } from "../redux/slices/workingSlice";

const Working = () => {
  const todos = useSelector((state) => state.working);
  const finishedTodos = useSelector((state) => state.done);
  const dispatch = useDispatch();

  const DeleteTodoHandler = (todoToDelete) => {
    dispatch(deleteTodo(todoToDelete));
  };

  const finishTodoHandler = (todoToFinish) => {
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
        <Container>
          {todos.map((todo) => (
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
                  onClick={() => finishTodoHandler(todo.id)}
                >
                  완료
                </Button>
              </ButtonGroup>
            </StyleWorking>
          ))}
        </Container>
      </StyleBox>
    </>
  );
};

export default Working;
