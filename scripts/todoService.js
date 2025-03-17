export class TodoService {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  getTodos = () => this.todos;

  saveTodos = () => localStorage.setItem('todos', JSON.stringify(this.todos));

  addTodo = (text) => {
    this.todos.push({ text, editable: false, isComplete: false });
    this.saveTodos;
  }

  toggleEdit = (index) => {
    this.todos[index].editable = !this.todos[index].editable;
    this.saveTodos();
  }

  updateTodo = ({ index, newText, isComplete }) => {
    if (newText) {
      this.todos[index].text = newText;
    }

    if (isComplete !== undefined) {
      this.todos[index].isComplete = isComplete;
    }

    this.saveTodos();
  }

  deleteTodo = (index) => {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
}