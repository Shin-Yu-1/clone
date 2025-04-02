import { TodoService } from "./todoService.js";

class TodoApp {
  constructor() {
    this.todoService = new TodoService();
    this.todoContainer = document.getElementById('list');
    this.addButton = document.querySelector('[name="add-button"]');
    this.addButton.addEventListener('click', () => this.addInputHandler());
    this.renderTodos();
  }

  addInputHandler = () => {
    const todoInput = document.querySelector('.todo-input');
    
    if (todoInput) {
      const text = todoInput.value.trim();
      todoInput.remove();
      this.addButton.textContent = 'ADD';

      if (text) {
        this.todoService.addTodo(text);
      }

      this.renderTodos();
    } else {
      this.showInput();
    }
  }

  showInput = () => {
    this.addButton.textContent = 'SAVE';
    
    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.placeholder = '할 일 입력';
    todoInput.classList.add('todo-input');
    
    this.addButton.parentNode.insertBefore(todoInput, this.addButton);
    todoInput.focus();
    
    const handleKeydown = (e) => {
      if (e.key === 'Enter') {
        todoInput.removeEventListener('input', handleKeydown);
        this.addInputHandler();
      } else if (e.key === 'Escape') {
        todoInput.remove();
        this.addButton.textContent = 'ADD';
      }
    };

    todoInput.addEventListener('keydown', handleKeydown)
  }

  renderTodos = () => {
    this.todoContainer.innerHTML = '';

    this.todoService.getTodos().forEach((todo, index) => {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';

      const listFirstChild = document.createElement('div');
      const listSecondChild = document.createElement('div');
      listItem.appendChild(listFirstChild);
      listItem.appendChild(listSecondChild);


      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.isComplete;
      checkbox.addEventListener('change', (e) => {
        console.log(e.target.checked);
        this.todoService.updateTodo({index, isComplete: e.target.checked})

        this.renderTodos();
      });

      listFirstChild.appendChild(checkbox);

      if (todo.editable) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = todo.text;
        input.addEventListener('input', (e) => {
          this.todoService.updateTodo({index, newText: e.target.value})
        });
        
        listFirstChild.appendChild(input);
      } else {
        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;
        textSpan.classList[todo.isComplete ? 'add' : 'remove']('checked');
        listFirstChild.appendChild(textSpan);
      }

      const editButton = document.createElement('button');
      editButton.textContent = todo.editable ? 'Save' : 'Edit';
      editButton.addEventListener('click', () => {
        this.todoService.toggleEdit(index);
        this.renderTodos();
      });
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        this.todoService.deleteTodo(index);
        this.renderTodos();
      });
      
      listSecondChild.appendChild(editButton);
      listSecondChild.appendChild(deleteButton);
      this.todoContainer.appendChild(listItem);
    });
  };
}

document.addEventListener("DOMContentLoaded", new TodoApp());