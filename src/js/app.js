import DrawUI from './UI/DrawUI';

const drawUI = new DrawUI();
drawUI.init();

const inputField = document.getElementById('input-field');

inputField.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'Enter' && inputField.value !== '') {
    drawUI.addTask(inputField.value);
    drawUI.clearInput();
  }
});
