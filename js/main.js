document.addEventListener('DOMContentLoaded', function() {
  const signInButton = document.querySelector('.signin');
  const closeButton = document.querySelector('.close');
  const submitButton = document.querySelector('.submit');
  const modalWindow = document.querySelector('.modal');
  const allInputs = document.querySelectorAll('input');

  // adding all the event listeners
  signInButton.addEventListener('click', toggleModalWindow);
  modalWindow.addEventListener('click', toggleModalWindow);
  submitButton.addEventListener('click', addError);

  allInputs.forEach((input) => input.addEventListener('mouseenter', () => {
    if (input.classList.contains('error')) {
      input.classList.remove('error');
    }
  }));

  allInputs.forEach((input) => input.addEventListener('click', toggleModalWindow));

  // fucntion declarations
  function toggleModalWindow(event) {

    console.log("Clicked item:", event.target)
    console.log("Type:", event.target.type);

    if ((event.target.type !== "text" || event.target.type !== "password") && event.target !== submitButton) {
      if (!modalWindow.style.display) {
        modalWindow.style.display = 'block';
      } else {
        modalWindow.style.display = '';
      }
    }

  }

  function addError() {
    allInputs.forEach((input) => input.classList.add('error'));
  }
});
