import { useDispatch } from "react-redux";
import {
  Button,
  StyleBox,
  StyleTodoForm,
} from "../styled-components/styled-todoList";
import useInput from "../hooks/useInput";
import { addTodo } from "../redux/slices/todoSlice";

const TodoForm = () => {
  const [title, onChangeTitleHandler, resetTitle] = useInput("");
  const [content, onChangeContentHandler, resetContent] = useInput("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      content,
      finished: false,
    };

    dispatch(addTodo(newTodo));
    resetTitle();
    resetContent();
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
              onChange={onChangeTitleHandler}
              required
            />
            <p>내용</p>
            <input
              type="text"
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={onChangeContentHandler}
              required
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

export default TodoForm;
