document.querySelector('.login-form').addEventListener('submit', (event) => {
  const form = event.target;
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if(email == '' || password == '') {
    alert('All form fields must be filled in');
    return;
  }
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  form.reset();
});