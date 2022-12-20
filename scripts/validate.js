
const showInputError = (config, form, input, errorMessage) => {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  error.textContent = errorMessage
  // error.classList.add(config.errorClass);
}

const hideInputError = (config, form, input) => {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  // error.classList.remove(config.errorClass);
  error.textContent = "";
}
const checkInputValidity = (input, config,form) => {
  if (!input.validity.valid) {
    showInputError(config, form, input, input.validationMessage);
  } else {
    hideInputError(config, form, input);
  }
}

const toggleButton = (inputs, button, config) => {
  const isFormValid = inputs.every(input => input.validity.valid)
  if (isFormValid) {
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = ''
  } else {
    button.classList.add(config.inactiveButtonClass)
    button.disabled = 'disabled'
  }
}

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)]
  forms.forEach(form => {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector)
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValidity(input, config,form)
        toggleButton(inputs, button, config)
      })
    })
  })
}

const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

enableValidation(config);
