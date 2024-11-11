import { TodoContext } from "../context/TodoProvider";
import { Button, StyleBox, StyleTodoForm } from "../styled-components/styled-todoList";
import { useContext, useState } from "react";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext); 

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <StyleBox>
        <StyleTodoForm>
          <p>TodoList</p>
          <form onSubmit={addTodoHandler}>
            <p>제목</p>
            <input
              type="text"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>내용</p>
            <input
              type="text"
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" $primary>추가하기</Button>
          </form>
        </StyleTodoForm>
      </StyleBox>
    </>
  );
};

export default TodoList;
