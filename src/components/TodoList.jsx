import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  StyleBox,
  StyleTodoForm,
} from "../styled-components/styled-todoList";
import { addTodo } from "../redux/slices/workingSlice";
import { useState } from "react";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todos = useSelector((state) => state.working);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, content };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <>
      <StyleBox>
        <StyleTodoForm>
          <p>TodoList ⛄</p>
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
            <Button type="submit" $primary>
              추가하기
            </Button>
          </form>
        </StyleTodoForm>
      </StyleBox>
    </>
  );
};

export default TodoList;
