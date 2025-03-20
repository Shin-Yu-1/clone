import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { todoRemove, todoChanged } from '@/store/todo';

import Checkbox from '@/components/elements/Checkbox';

const List = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(todoChanged({ id: todo.id, completed: !todo.completed }))}
            label={todo.text}
          />
          <li key={todo.id}>
            {todo.text} {todo.completed ? "(완료)" : "(미완료)"}
          </li>
        </>
      ))}
    </ul>
  )
};

export default List;