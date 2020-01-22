const openBtns = document.querySelectorAll('.open-popup');
const closeBtn = document.querySelector('#close-popup');

closeBtn.addEventListener('click', closePopup);

// for multiple elements with the same class: .open-popup
for (let i = 0; i < openBtns.length; i++)
  openBtns[i].addEventListener('click', openPopup);

const popup = document.querySelector('#popup');

function openPopup() {
  popup.classList.add('popup-visibility');
}

function closePopup() {
  popup.classList.remove('popup-visibility');
}