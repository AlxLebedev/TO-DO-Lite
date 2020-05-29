import Listener from '../Listener';

export default class DrawUI {
  constructor() {
    this.listener = new Listener(this);
    this.inputField = null;
    this.taskListField = document.getElementById('tasks-list-field');
  }

  init() {
    this.clearInput();
  }

  addTask(taskMessage) {
    const newTask = document.createElement('div');
    newTask.className = 'task-item';
    newTask.innerText = taskMessage;

    const delTaskButton = document.createElement('div');
    delTaskButton.className = 'del-task-button';
    delTaskButton.innerText = 'x';
    delTaskButton.setAttribute('data-id', 'del');
    
    newTask.append(delTaskButton);
    this.taskListField.append(newTask);

    this.listener.addClickListener(newTask);
  }

  delTask(element) {
    element.remove();
  }

  clearInput() {
    this.inputField = document.getElementById('input-field');
    this.inputField.value = '';
  }
}
