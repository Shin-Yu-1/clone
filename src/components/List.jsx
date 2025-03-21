import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '@/components/elements/Button.jsx';
import Checkbox from '@/components/elements/Checkbox.jsx';
import { todoRemoved, todoChanged, todoReordered } from '@/store/todo.js';

const TodoText = styled.span`
  color: ${({ completed }) => (completed ? '#999' : '#000')}; /* 완료되면 회색 */
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}; /* ✅ 취소선 */
  font-size: 1.6rem;
  margin: 0 10px;
`;

const DraggableItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background: #f9f9f9;
  cursor: grab;
`;


const List = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const dragItemIndex = useRef(null);

  const handleDragStart = index => {
    dragItemIndex.current = index;
  };

  const handleDragOver = e => {
    e.preventDefault(); // 반드시 필요 (drop 이벤트가 발생하게 함)
  };

  const handleDrop = index => {
    const fromIndex = dragItemIndex.current;
    const toIndex = index;

    if (fromIndex !== null && fromIndex !== toIndex) {
      dispatch(todoReordered({ fromIndex, toIndex }));
    }

    dragItemIndex.current = null;
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <DraggableItem
          key={todo.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
        >
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(todoChanged({ id: todo.id, completed: !todo.completed }))}
          />
          <TodoText completed={todo.completed}>{todo.text}</TodoText>
          <Button onClick={() => dispatch(todoRemoved({ id: todo.id }))}>DELETE</Button>
        </DraggableItem>
      ))}
    </ul>
  );
};

export default List;
