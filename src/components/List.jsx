import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { todoRemoved, todoChanged } from '@/store/todo';

import Checkbox from '@/components/elements/Checkbox';
import Button from '@/components/elements/Button';

const List = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(todoChanged({ id: todo.id, completed: !todo.completed }))}
          />
          {todo.text}
          {todo.completed ? "(완료)" : "(미완료)"}
          <Button onClick={() => dispatch(todoRemoved({ id: todo.id}))}>DELETE</Button>
        </li>
      ))}
    </ul>
  )
};

export default List;