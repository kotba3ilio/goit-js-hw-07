let nameOutput = document.querySelector('#name-output');
document.querySelector('#name-input').addEventListener('input', (event) => {
  var inputValue = event.target.value.trim();
  if(inputValue == null || inputValue == '') {
    nameOutput.textContent = 'незнакомец';
  } else {
    nameOutput.textContent = inputValue;
  }
});