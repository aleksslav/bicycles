'use strict';

(function () {

  var navMain = document.querySelector('.header-nav');
  var navToggle = document.querySelector('.header-nav__toggle');
  var body = document.querySelector('body');

  navMain.classList.remove('header-nav--no-js');


  if (document.contains(navMain) && document.contains(navToggle)) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header-nav--closed')) {
        navMain.classList.remove('header-nav--closed');
        navMain.classList.add('header-nav--opened');
        body.classList.add('overflow');
      } else {
        navMain.classList.add('header-nav--closed');
        navMain.classList.remove('header-nav--opened');
        body.classList.remove('overflow');
      }
    });
  }
})();
