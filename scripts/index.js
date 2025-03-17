class TodoApp {
  constructor() {
      this.todoList = JSON.parse(localStorage.getItem('todos')) || [];
      this.todoContainer = document.getElementById('list');
      this.addButton = document.querySelector('[name="add-button"]');
      this.addButton.addEventListener('click', () => this.addInputHandler());
      this.renderTodos();
  }

  saveTodos = () => localStorage.setItem('todos', JSON.stringify(this.todoList));

  addInputHandler = () => {
    const existingInput = document.querySelector('.todo-input');
    
    if (existingInput) {
      const text = existingInput.value.trim();
      existingInput.remove();
      this.addButton.textContent = 'ADD';

      if (text) {
        this.addTodo(text);
      }
    } else {
      this.showInput();
    }
  }

  showInput = () => {
    if (this.todoContainer.querySelector('.todo-input')) {
      return;
    }

    this.addButton.innerHTML = 'SAVE';

    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.placeholder = '할 일 입력';
    todoInput.classList.add('todo-input');

    this.addButton.parentNode.insertBefore(todoInput, this.addButton);

    todoInput.focus();

    const handleKeydown = (e) => {
      if (todoInput.value && e.key === 'Enter') {
        this.addTodo(todoInput.value);
  
        todoInput.removeEventListener('keydown', handleKeydown);
        todoInput.remove();
      }
    };

    todoInput.addEventListener('keydown', handleKeydown)
  }

  addTodo = (text) => {
      this.todoList.push({ text, editable: false });
      this.saveTodos();
      this.renderTodos();
  };

  toggleEdit = (index) => {
      this.todoList[index].editable = !this.todoList[index].editable;
      this.saveTodos();
      this.renderTodos();
  };

  updateTodo = (index, newText) => {
      this.todoList[index].text = newText;
      this.saveTodos();
  };

  deleteTodo = (index) => {
      this.todoList.splice(index, 1);
      this.saveTodos();
      this.renderTodos();
  };

  renderTodos = () => {
      this.todoContainer.innerHTML = '';
      this.todoList.forEach((todo, index) => {
          const listItem = document.createElement('div');
          
          if (todo.editable) {
              const input = document.createElement('input');
              input.type = 'text';
              input.value = todo.text;
              input.addEventListener('input', (e) => this.updateTodo(index, e.target.value));
              listItem.appendChild(input);
          } else {
              listItem.textContent = todo.text;
          }
          
          const editBtn = document.createElement('button');
          editBtn.textContent = todo.editable ? 'Save' : 'Edit';
          editBtn.addEventListener('click', () => this.toggleEdit(index));
          
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', () => this.deleteTodo(index));
          
          listItem.appendChild(editBtn);
          listItem.appendChild(deleteBtn);
          this.todoContainer.appendChild(listItem);
      });
  };
}



document.addEventListener("DOMContentLoaded", new TodoApp());