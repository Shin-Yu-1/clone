import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '@/components/elements/Button.jsx';
import Checkbox from '@/components/elements/Checkbox.jsx';
import Input from '@/components/elements/Input.jsx';
import { todoChanged, todoRemoved } from '@/store/todo.js';

const DraggableItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background: #f9f9f9;
  cursor: grab;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TodoText = styled.span`
  color: ${({ completed }) => (completed ? '#999' : '#000')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const TodoItem = ({ todo, index, handleDragStart, handleDragOver, handleDrop }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (editable) {
      dispatch(todoChanged({ id: todo.id, text }));
    }
    setEditable(!editable);
  };

  return (
    <DraggableItem
      draggable
      onDragStart={() => handleDragStart(index)}
      onDragOver={handleDragOver}
      onDrop={() => handleDrop(index)}
    >
      {editable ? (
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(todoChanged({ id: todo.id, completed: !todo.completed }))}
          />
          <TodoText completed={todo.completed}>{todo.text}</TodoText>
        </>
      )}
      <Button onClick={handleEdit}>{editable ? 'SAVE' : 'EDIT'}</Button>
      <Button onClick={() => dispatch(todoRemoved({ id: todo.id }))} backgroundColor={'red'}>
        DELETE
      </Button>
    </DraggableItem>
  );
};

export default TodoItem;
