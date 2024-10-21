const menuBtn = document.querySelector('.header__mobile_burger-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__mobile_burger-btn-active');
  menu.classList.toggle('menu__active');
});
