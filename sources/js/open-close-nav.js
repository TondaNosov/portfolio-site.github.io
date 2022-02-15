let navToggle = document.querySelector('.main-nav__toggle');
let navBar = document.querySelector('.main-nav');

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log('bla bla vbla')
  if (navBar.classList.contains('main-nav--close')) {
    navBar.classList.remove('main-nav--close');
    navBar.classList.add('main-nav--open');
  } else {
    navBar.classList.remove('main-nav--open');
    navBar.classList.add('main-nav--close');
  };
});