//-------------------------------переменные----------------------//
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupProfileEditElement = document.querySelector('.profile__edit-button');
const pageElement = document.querySelector('.page');
const profileName = pageElement.querySelector('.profile__title');
const profileJob = pageElement.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');

//--------------------------функции--------------------------//
const openPopup = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

// const closePopupByClickOnOverlay = function (event) {
//   console.log(event.target, event.currentTarget);
//   if (event.target !== event.currentTarget) {
//     return;
//   }
//   closePopup();
// }


// ----------------------обработчик--------------------------- //
formElement.addEventListener('submit', formSubmitHandler);
popupProfileEditElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
// popupElement.addEventListener('click', closePopupByClickOnOverlay);
// -----------------------------------------------------//


//-----------------------------Лайки--------------------------------//
// const likeElement = document.querySelectorAll('.card__like-button');
// const likeActiveElement = document.querySelector('card__like-button_active');
// const handleLike = (event) => {
//   if (event.target.classList.contains('card__like-button_active')) {
//     event.target.classList.remove('card__like-button_active');
//     return;
//   }
//   event.target.classList.add('card__like-button_active');
// }
// likeElement.forEach(element => {
//   element.onclick = handleLike
// });
