export class EventBinder {
  constructor(listItems, service, onUpdateUI) {
    // this.container = container;
    this.listItems = listItems;
    this.service = service;
    this.onUpdateUI = onUpdateUI;
  }

  bindTodoEvents = () => {
    this.listItems.forEach(({checkbox, editButton, deleteButton, textItem}) => {
      editButton?.removeEventListener('click', this.handleClick);
      editButton?.removeEventListener('change', this.handleChange);
      deleteButton?.removeEventListener('click', this.handleClick);
      deleteButton?.removeEventListener('change', this.handleChange);

      checkbox?.addEventListener('click', this.handleClick);
      checkbox?.addEventListener('change', this.handleChange);
    });
    // this.container.removeEventListener('click', this.handleClick);
    // this.container.removeEventListener('change', this.handleChange);

    // this.container.addEventListener('click', this.handleClick);
    // this.container.addEventListener('change', this.handleChange);
  };

  handleClick = (e) => {
    const item = e.target.closest('.list-item');
    if (!item) return;

    const index = Number(item.dataset.index);

    if (e.target.matches('.edit-button')) {
      const input = item.querySelector('.todo-edit-input');
      if (input) {
        this.service.updateTodo({ index, newText: input.value });
      }
      this.service.toggleEdit(index);
      this.onUpdateUI();
    }

    if (e.target.matches('.delete-button')) {
      this.service.deleteTodo(index);
      this.onUpdateUI();
    }
  };

  handleChange = (e) => {
    const item = e.target.closest('.list-item');

    if (!item) {
      return;
    }

    const index = Number(item.dataset.index);

    if (e.target.matches('.todo-checkbox')) {
      this.service.updateTodo({ index, isComplete: e.target.checked });
      this.onUpdateUI();
    }
  };
}