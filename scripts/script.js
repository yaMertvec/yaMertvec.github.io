const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.popup__opened');
const pageElement = document.querySelector('.page');
const profileName = pageElement.querySelector('.profile__title');
const profileJob = pageElement.querySelector('.profile__subtitle');


//----------------------Открытие закрытие попапчика-----------------------------//

const openPopup = function () {
  popupElement.classList.add('popup__opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup__opened');
}

const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
// -----------------------------------------------------//


// ----------------------Сохранение Информации--------------------------- //
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);
// -----------------------------------------------------//


//-----------------------------Лайки--------------------------------//
const likeElement = document.querySelectorAll('.card__like-button');
const likeActiveElement = document.querySelector('card__like-button_active');
console.log(likeElement);
const handleLike = (event) => {
  if (event.target.classList.contains('card__like-button_active')) {
    event.target.classList.remove('card__like-button_active');
    return;
  }
  event.target.classList.add('card__like-button_active');
  console.log(event.target.getAttribute('data-id'));
}
likeElement.forEach(element => {
  element.onclick = handleLike
});
