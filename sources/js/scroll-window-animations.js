window.onscroll = function() {

  document.querySelector(".about__header").classList.add("hidden");
  document.querySelector(".about__underline").classList.add("hidden");
  document.querySelector(".about__image").classList.add("hidden");
  document.querySelector(".about__info").classList.add("hidden");

  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 ) 
  document.querySelector(".about__header").classList.add("left-appearance"),
  document.querySelector(".about__underline").classList.add("right-appearance");

  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450 ) 
  document.querySelector(".about__image").classList.add("bottom-appearance");

  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550 ) 
  document.querySelector(".about__info").classList.add("bottom-appearance"); 
};


