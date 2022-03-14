let navToggle = document.querySelector('.main-nav__toggle');
let navBar = document.querySelector('.main-nav');
let header = document.querySelector(".page-header");
let navBarItemArr = document.querySelectorAll(".main-nav__item");


// OPEN / CLOSE NAV

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navBar.classList.contains('main-nav--close')) {
    navBar.classList.remove('main-nav--close');
    navBar.classList.add('main-nav--open');
  } else {
    navBar.classList.remove('main-nav--open');
    navBar.classList.add('main-nav--close');
  };
});

// NAV POSITION

document.addEventListener ("scroll", function() {
  if (
    document.documentElement.scrollTop > (header.clientHeight + navBar.clientHeight) && 
    window.innerWidth >= 1200
    ) {
   document.querySelector(".main-nav").classList.add("main-nav--fixed"),
   document.querySelector(".main-nav").classList.add("nav-down");
  }

  if (document.documentElement.scrollTop < header.clientHeight) {
    document.querySelector(".main-nav").classList.remove("main-nav--fixed"),
    document.querySelector(".main-nav").classList.remove("nav-down");
   }
 });

//  ACTIVE PAGE

for (let i = 0; i < navBarItemArr.length; i++) {
  navBarItemArr[i].addEventListener("click", function() {

    for (let i = 0; i < navBarItemArr.length; i++) {
      navBarItemArr[i].classList.remove("main-nav__item--active");
    };

    navBarItemArr[i].classList.add("main-nav__item--active");
    navBar.classList.remove("main-nav--open");
    navBar.classList.add("main-nav--close");
  });
}
