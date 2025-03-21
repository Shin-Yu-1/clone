import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { todoReordered } from '@/store/todo.js';

import TodoItem from './TodoItem.jsx';

const List = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const dragItemIndex = useRef(null);

  const handleDragStart = index => {
    dragItemIndex.current = index;
  };

  const handleDragOver = e => {
    e.preventDefault();
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
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </ul>
  );
};

export default List;
