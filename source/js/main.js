'use strict';

(function () {

  var navMain = document.querySelector('.header-nav');
  var navToggle = document.querySelector('.header-nav__toggle');

  navMain.classList.remove('header-nav--no-js');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header-nav--closed')) {
      navMain.classList.remove('header-nav--closed');
      navMain.classList.add('header-nav--opened');
    } else {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--opened');
    }

  });

  var links = document.querySelectorAll('.site-list__item');
  var addSlowScroll = function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var i = 0; i < links.length; i++) {
    addSlowScroll(links[i]);
  }

})();
