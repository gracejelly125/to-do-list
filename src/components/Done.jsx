import { useContext } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Content,
  StyleBox,
  StyleWorking,
  Title,
} from "../styled-components/styled-todoList";
import { TodoContext } from "../context/TodoProvider";

// List의 Item으로 map으로 그려지는 경우는 props를 받아야 한다.
const Done = () => {
  const { setTodos, finishedTodos, setFinishedTodos } = useContext(TodoContext);

  const DeleteTodoHandler = (todoToDelete) => {
    setFinishedTodos(finishedTodos.filter((todo) => todo.id !== todoToDelete));
  };

  const cancelTodoHandler = (todoToCancel) => {
    setFinishedTodos(finishedTodos.filter((todo) => todo.id !== todoToCancel));
    const canceledTodo = finishedTodos.find((todo) => todo.id === todoToCancel);
    if (canceledTodo) {
      setTodos((prevTodos) => [...prevTodos, canceledTodo]);
    }
  };

  return (
    <>
      <StyleBox>
        <p>Done</p>
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
