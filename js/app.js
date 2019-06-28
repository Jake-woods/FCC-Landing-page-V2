// UI selection
const landingImages = document.querySelectorAll(".landing__image");
const navBarEle = document.querySelector('.nav');
const navBarCloseEle = document.querySelector('.nav__close');
const navBarOpenEle = document.querySelector('.header__nav-cta');

// Functionality

// Change the visibility of navigation bar
navBarOpenEle.addEventListener('click', () => {
   navBarEle.classList.add('nav--is-visible');
   console.log('a');
});

navBarCloseEle.addEventListener('click', () => {
   navBarEle.classList.remove('nav--is-visible');
   console.log('b');
})

// Landing page gallery transition
let index = 0;
const timer = 15000; // Seconds
const changeImage = () => {
   landingImages.forEach(img =>
      img.classList.remove("landing__image--is-visible")
   );

   index != landingImages.length - 1 ? index++ : (index = 0);

   landingImages[index].classList.add("landing__image--is-visible");
};

setInterval(changeImage, timer);