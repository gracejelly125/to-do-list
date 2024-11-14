import { useDispatch, useSelector } from "react-redux";
import { Container, Msg, StyleBox } from "../styled-components/styled-todoList";
import TodoItem from "./TodoItem";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDeleteTodo = (todoToDelete) => {
    dispatch(deleteTodo(todoToDelete));
  };

  const handleFinishTodo = (todoToFinish) => {
    const updatedTodo = { ...todoToFinish, finished: !todoToFinish.finished };
    dispatch(
      updateTodo({ id: todoToFinish.id, finished: updatedTodo.finished })
    );
  };

  const sections = [
    {
      id: "Working",
      todos: todos.filter((todo) => !todo.finished),
      buttonText: "완료",
      title: "Working 🎄",
    },
    {
      id: "Finished",
      todos: todos.filter((todo) => todo.finished),
      buttonText: "취소",
      title: "Finished 🎁",
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <TodoItem
          key={section.id}
          todos={section.todos}
          buttonText={section.buttonText}
          title={section.title}
          deleteButtonHandler={handleDeleteTodo}
          cancelButtonHandler={handleFinishTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
