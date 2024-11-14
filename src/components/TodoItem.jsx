import React from "react";
import {
  Button,
  ButtonGroup,
  Content,
  StyleWorking,
  Title,
} from "../styled-components/styled-todoList";

//
const TodoItem = ({
  todo,
  buttonText,
  deleteButtonHandler,
  cancelButtonHandler,
}) => {
  console.log("todo =>", todo);
  return (
    <StyleWorking>
      <Title>{todo.title}</Title>
      <Content>{todo.content}</Content>
      <ButtonGroup>
        <Button type="button" onClick={() => deleteButtonHandler(todo)}>
          삭제하기
        </Button>
        <Button type="button" onClick={() => cancelButtonHandler(todo)}>
          {buttonText}
        </Button>
      </ButtonGroup>
    </StyleWorking>
  );
};

export default TodoItem;
