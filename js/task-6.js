const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for(let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
    size += 10;
  }
  return elements;
}

function destroyBoxes() {
   boxes.innerHTML = '';
}

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
    const input = document.querySelector('input');
    const button = event.target;
    switch(button.dataset.action) {
      case 'render':
        if(input.value > 0 && input.value <= 100) {
          destroyBoxes();
          boxes.append(...createBoxes(input.value));
        }
        break;
      case 'destroy':
        destroyBoxes();
        break;
    }
  });
});