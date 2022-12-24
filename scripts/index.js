//-------------------------------переменные----------------------//
// const popupElement = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('.popup_type-edit');
const popupCardAdd = document.querySelector('.popup_card-add');
const closePopupButtonElement = popupProfileEdit.querySelector('.popup__close');
const openPopupProfileEdit = document.querySelector('.profile__edit-button');
const pageElement = document.querySelector('.page');
const profileName = pageElement.querySelector('.profile__title');
const profileJob = pageElement.querySelector('.profile__subtitle');
const editFormElement = popupProfileEdit.querySelector('.popup__edit');
const addFormElement= document.querySelector('.popup__add');
const nameInput = editFormElement.querySelector('.popup__input_data_name');
const jobInput = editFormElement.querySelector('.popup__input_data_job');
const openAddCardButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup__input_data_place');
const popupPlaceLink = document.querySelector('.popup__input_data_place-link');
const closeCardAddPopup = document.querySelector('.popup__close_card-add');
const closeImagePopup = document.querySelector('.popup__close_image');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const popupImage = document.querySelector('.popup_image');
const listElements = document.querySelector('.elements');

const closePopupEditProfile = document.querySelector('.popup__close_edit-profile');
const popupDescription = document.querySelector('.popup__description');
const popupImageElement = document.querySelector('.popup__image-element');
const escapeButton = 'Escape'
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//       Добавление карточки     //

const generateCard = (item) => {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', handleDeleteButton);
  const likeElement = card.querySelector('.card__like-button');
  likeElement.addEventListener('click', handleLikeButton);
  cardTitle.textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  cardImage.addEventListener('click',handleOpenImagePopup);
  return card;
};

//--------------------открытие и закрытие попапа с изображением --------------------//
const handleOpenImagePopup = (e) => {
  popupImageElement.src = e.target.src
  popupImageElement.alt = e.target.closest('.card').querySelector('.card__title').textContent;
  popupDescription.textContent = e.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupImage);
}

//--------------удаление------------//
const handleDeleteButton = (e) => {
  e.target.closest('.card').remove();
};
//-----------------лайки----------------//

const handleLikeButton = (e) => {
  e.target.classList.toggle('card__like-button_active');
};
//-------------------------------------//
const renderCard = (item) => {
  const card = generateCard(item);
  listElements.prepend(card)
};
initialCards.forEach((item) => {
  renderCard(item);
});
//------------------------------------------------------------------------------//

//------------------------профиль------------------//

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByDownEscButton);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByDownEscButton);
};

function handleFormEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileEdit);
}

editFormElement.addEventListener('submit', handleFormEditSubmit);
openPopupProfileEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfileEdit);
});
closePopupButtonElement.addEventListener('click', () => {
  closePopup(popupProfileEdit);
});
//--------------------------------------------------------//

//--------------------открываем и закрываем попап с добавлением карточки ---------------//
openAddCardButton.addEventListener('click', () => {
  openPopup(popupCardAdd);
})
closeCardAddPopup.addEventListener('click', () => {
  closePopup(popupCardAdd);
})
//---------------добавление карточки---------------//

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  disableButton(e.submitter,config)
  // e.submitter.disabled = true;
  // e.submitter.classList.add('popup__button_disabled')
  const card = {
    name: popupPlace.value,
    link: popupPlaceLink.value
  }
  renderCard(card)
  closePopup(popupCardAdd);
 e.target.reset();
}
addFormElement.addEventListener('submit', handleAddCardFormSubmit);
closeImagePopup.addEventListener('click' , () => {
  closePopup(popupImage);
})




const closePopupByDownEscButton = (e) => {
  if (e.key === escapeButton) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//--------------------закрытие попапа кликом на оверлей--------------------//
const popupElements = document.querySelectorAll('.popup');
const closePopupByClickOnOverlay = (e) => {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
}
popupElements.forEach((element) => element.addEventListener('click', closePopupByClickOnOverlay));
