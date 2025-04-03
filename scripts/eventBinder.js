export class EventBinder {
  constructor(service, onUpdateUI) {
    this.service = service;
    this.onUpdateUI = onUpdateUI;
    this.listItems = null;
  }

  handleCheckbox = (e) => {
    const index = this.listItems.findIndex(item => item.checkbox === e.target);
    this.service.updateTodo({index, isComplete: e.target.checked})

    this.onUpdateUI();
  }

  handleButton = (e) => {
    const index = this.listItems.findIndex(
      item => item.editButton === e.target || item.deleteButton === e.target
    );
    
    if (e.target.matches('.edit-button')) {
      this.service.toggleEdit(index);
      this.onUpdateUI();
    }

    if (e.target.matches('.delete-button')) {
      this.service.deleteTodo(index);
      this.onUpdateUI();
    }
  }

  bindTodoEvents = (listItems) => {
    this.listItems = listItems;

    listItems.forEach(({checkbox, editButton, deleteButton, textItem}) => {
      checkbox.addEventListener('change', this.handleCheckbox);
      editButton.addEventListener('click', this.handleButton);
      deleteButton.addEventListener('click', this.handleButton);
    });
  };

  removeEvents = () => {
    if (this.listItems) {
      this.listItems.forEach(({checkbox, editButton, deleteButton, textItem}, index) => {
        checkbox.removeEventListener('change', this.handleCheckbox);
      });
    }
  }
}