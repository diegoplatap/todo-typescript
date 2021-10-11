import React from "react";

interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

type ToggleTodo = (selectedTodo: Todo) => void;

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
