/* OPEN / CLOSE NAV */

let navToggle = document.querySelector('.main-nav__toggle');
let navBar = document.querySelector('.main-nav');

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

/* NAV POSITION */

let header = document.querySelector(".page-header");

document.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop > (header.clientHeight + navBar.clientHeight)) {
   document.querySelector(".main-nav").classList.add("main-nav--fixed"),
   document.querySelector(".main-nav").classList.add("main-nav--down");
  }

  if (document.documentElement.scrollTop < header.clientHeight) {
    document.querySelector(".main-nav").classList.remove("main-nav--fixed"),
    document.querySelector(".main-nav").classList.remove("main-nav--down");
   }
 });

/* ACTIVE PAGE */

let navBarItemsArr = document.querySelectorAll(".main-nav__item");

for (let i = 0; i < navBarItemsArr.length; i++) {
  navBarItemsArr[i].addEventListener("click", function(evt) {

    for (let i = 0; i < navBarItemsArr.length; i++) {
      navBarItemsArr[i].classList.remove("main-nav__item--active");
    };

    navBarItemsArr[i].classList.add("main-nav__item--active");
    navBar.classList.remove("main-nav--open");
    navBar.classList.add("main-nav--close");
  });
}

/* SCROLL ANIMATIONS */

const animItems = document.querySelectorAll(".--anim-items");

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(param) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ( (scrollY > (animItemOffset - animItemPoint)) && (scrollY < (animItemOffset + animItem.offsetHeight)) ) {
        animItem.classList.add('--animate');
      } else {
        if (!animItem.classList.contains('--anim-no-hide')) {
          animItem.classList.remove('--animate');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop}
  }

  setTimeout(() => {animOnScroll()}, 500);
}