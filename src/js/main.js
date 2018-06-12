$(function () {
  $('.hamburger, .hamburger-close').click(function () {
    $('.nav__list').slideToggle('fast');
    $('.hamburger-close').fadeToggle('fast');
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $('.scroll-top').addClass('scroll-top--active');
    } else {
      $('.scroll-top').removeClass('scroll-top--active');
    }
  });
  $('.scroll-top').click(function () {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });
});

$(function () {
  $("#tabs").tabs();
});

$(function() {
  $('.galpop-single').galpop({
    lockScroll: false,
  });
});
