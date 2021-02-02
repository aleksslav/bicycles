'use strict';

(function () {
  const body = document.querySelector('.page-body');
  let header;
  let navMain;
  let navToggle;

  const existsInPage = (node) => {
    return body.contains(node);
  };

  if (existsInPage(body.querySelector('.page-header'))) {
    header = body.querySelector('.page-header');

    if (existsInPage(body.querySelector('.header-nav'))) {
      navMain = header.querySelector('.header-nav');

      if (existsInPage(navMain.querySelector('header-nav__toggle'))) {
        navToggle = navMain.querySelector('header-nav__toggle');
      }
    }
  }

  window.util = {
    body,
    header,
    navMain,
    navToggle,
    existsInPage
  };

})();

(function () {

  var navMain = document.querySelector('.header-nav');
  var navToggle = document.querySelector('.header-nav__toggle');
  var body = document.querySelector('body');

  navMain.classList.remove('header-nav--no-js');

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
})();
