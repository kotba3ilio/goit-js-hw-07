function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click', (event) => {
  const body = document.querySelector('body');
  const span = document.querySelector('.color');
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});