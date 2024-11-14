import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Content,
  Msg,
  StyleBox,
  StyleWorking,
  Title,
} from "../styled-components/styled-todoList";

//
const TodoItem = ({
  todos,
  title,
  buttonText,
  deleteButtonHandler,
  cancelButtonHandler,
}) => {
  return (
    <>
      <StyleBox>
        <p>{title}</p>
        {todos.length === 0 ? (
          <Msg>{`${
            title === "Working 🎄"
              ? "아직 등록된 리스트가 없습니다. 할 일을 추가해보세요!"
              : "완료된 리스트가 없습니다."
          }`}</Msg>
        ) : (
          <Container>
            {todos.map((todo) => (
              <StyleWorking key={todo.id}>
                <Title>{todo.title}</Title>
                <Content>{todo.content}</Content>
                <ButtonGroup>
                  <Button
                    type="button"
                    onClick={() => deleteButtonHandler(todo)}
                  >
                    삭제하기
                  </Button>
                  <Button
                    type="button"
                    onClick={() => cancelButtonHandler(todo)}
                  >
                    {buttonText}
                  </Button>
                </ButtonGroup>
              </StyleWorking>
            ))}
          </Container>
        )}
      </StyleBox>
    </>
  );
};

export default TodoItem;
