import { useSelector } from 'react-redux';
import { todoRemove, todoChanged } from '@/store/todo';

const List = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.completed ? "(완료)" : "(미완료)"}
        </li>
      ))}
    </ul>
  )
};

export default List;