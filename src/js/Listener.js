export default class Listener {
  constructor(drawUI) {
    this.drawUI = drawUI;
  }

  addClickListener(element) {
    element.addEventListener('click', (event) => {
      if (event.target.dataset.id === 'del') {
        this.drawUI.delTask(element);
      }
    });
  }
}
