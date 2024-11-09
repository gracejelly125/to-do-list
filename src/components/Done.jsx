import {
  Button,
  ButtonGroup,
  Container,
  Content,
  StyleBox,
  StyleWorking,
  Title,
} from "../styled-components/styled-todoList";

const Done = ({ setTodos, finishedTodos, setFinishedTodos }) => {
  const DeleteTodoHandler = (todoToDelete) => {
    const deletedTodos = finishedTodos.filter(
      (todo) => todo.id !== todoToDelete
    );
    setFinishedTodos(deletedTodos);
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
