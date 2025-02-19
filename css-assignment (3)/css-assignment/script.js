`use strict`;
//scrolling
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.scroll1').forEach(button => {
      button.addEventListener('click', function () {
        const section = document.querySelector(this.dataset.target);
        if (section) {
          section.scrollIntoView({behavior:'smooth'});
        }
      });
    });
  });
  
  
//sliding
document.addEventListener('DOMContentLoaded', function () {

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  let curSlide = 0;
  const maxSlide = slides.length;


  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);

  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

};
slider();
});
