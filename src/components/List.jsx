import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '@/components/elements/Button.jsx';
import Checkbox from '@/components/elements/Checkbox.jsx';
import { todoRemoved, todoChanged } from '@/store/todo.js';

const TodoText = styled.span`
  color: ${({ completed }) => (completed ? '#999' : '#000')}; /* 완료되면 회색 */
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}; /* ✅ 취소선 */
  font-size: 1.6rem;
  margin: 0 10px;
`;

const List = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(todoChanged({ id: todo.id, completed: !todo.completed }))}
          />
          <TodoText completed={todo.completed}>{todo.text}</TodoText>
          <Button onClick={() => dispatch(todoRemoved({ id: todo.id }))}>DELETE</Button>
        </li>
      ))}
    </ul>
  );
};

export default List;
