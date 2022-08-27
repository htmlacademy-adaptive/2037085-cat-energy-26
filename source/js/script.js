
if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

// Скрипт для меню
const menuBtn = document.querySelector('.navigation__btn');
const menuNav = document.querySelector('.navigation');


if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault;
    menuNav.classList.toggle('navigation--opened');
  });
}



