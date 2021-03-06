/* COMMIT SIZE OF PAGE-HEADER*/

/*
* Commit size of page-header for mobile version while viewport is changing (it happens while scrolling in Opera, Edge or Firefox) 
*/

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const tabletWidth = 768;

const pageHeader = document.querySelector('.page-header');
const pageHeaderBackground = document.querySelector('.page-header__background');

if (vw < tabletWidth) {
  pageHeader.style.height = `${vh}px`;
  pageHeaderBackground.style.height = `${vh}px`;
}

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

/* STYLE PARENT ELEMENT WHILE FOCULINS A CHILD ELEMENT */

const cardButtons = document.querySelectorAll(".card__button");

if (cardButtons.length > 0) {
  for (let i = 0; i < cardButtons.length; i++) {
    let cardButton = cardButtons[i];
    cardButton.addEventListener("focus", function() {
      cardButton.closest(".card__wrap").classList.add("--focused");
    });
    cardButton.addEventListener("focusout", function() {
      cardButton.closest(".card__wrap").classList.remove("--focused");
    });

  }
}

/* POPUP */

const popupLinks = document.querySelectorAll(".--popup-link");

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(`${popupName}`);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  curentPopup.classList.add("--open");
  curentPopup.addEventListener("click", function(e) {
    if (!e.target.closest(".popup__content")) {
      popupClose(e.target.closest(".popup"));
    }
  });
}

function popupClose(popupActive) {
  popupActive.classList.remove("--open");
}

const popupCloseIcons = document.querySelectorAll(".popup__close");

if (popupCloseIcons.length > 0) {
  for (let i = 0; i < popupCloseIcons.length; i++) {
    const el = popupCloseIcons[i];
    el.addEventListener("click", function(e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

document.addEventListener("keydown", function(e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.--open");
    popupClose(popupActive);
  }
});

/* CHANGE LANGUAGE */

const langToggle = document.querySelector('.main-nav__change-lang');
const allLang = ["cs", "en"];

langToggle.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = langToggle.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#cs";
    location.reload();
  }

  langToggle.value = hash;

  document.querySelector("title").innerHTML = langArr["title"][hash];

  document.documentElement.setAttribute("lang", hash);

  for (let key in langArr){
    keyArr = document.querySelectorAll(key);
    for (let index of keyArr) {
      if (index.placeholder) {
        index.placeholder = langArr[key][hash];
      } else {
        index.innerHTML = langArr[key][hash];
      }
    }
    
  }
}

changeLanguage();