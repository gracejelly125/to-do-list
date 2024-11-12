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

const Working = () => {
  const { todos, setTodos, setFinishedTodos } = useContext(TodoContext);

  const DeleteTodoHandler = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete));
  };

  const finishTodoHandler = (todoToFinish) => {
    setTodos(todos.filter((todo) => todo.id !== todoToFinish));
    const finishedTodo = todos.find((todo) => todo.id === todoToFinish);
    if (finishedTodo) {
      setFinishedTodos((prevFinishedTodos) => [
        ...prevFinishedTodos,
        finishedTodo,
      ]);
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
