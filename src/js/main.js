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
// $(function () {
//   $('.galpop-single').galpop({
//     lockScroll: false,
//   });
// });
$(function bx() {
  $('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    useCSS: false,
    tickerHover: true,
    autoHover: true,
    autoActive: true,
    // captions: true,
    // slideWidth: 600,
    // adaptiveHeight: true,
  });
});

$('.product__btn').click(function (e) {
  e.preventDefault();
  $('.buy-modal, #modal-overlay').show();
  $('.buy-btn').focus();
});

$(function () {

  // var code = e.keyCode || e.which == 13 || 27 || 32;

  function rm() {
    $('.buy-modal, #modal-overlay').fadeOut('fast');
  };

  $('.buy-btn').bind('keydown || click', function (e) {
    if (e.keyCode || e.which == 13 || 27 || 32) {
      rm();
    }
  });

  $(window).bind('keydown', function (e) {
    if (e.keyCode || e.which == 13 || 27 || 32) {
      rm();
    }
  });

  $('#modal-overlay').on('click', function () {
    rm();
  });

});

$(function () {
  $("input").checkboxradio();
});

$(function () {
  $('#color').click(function (e) {
    $('#color[name="color"]').val();
    $('input[name^="news"]').val();
  });
});

$(function () {

  $('.paremeter__col input').each(function () {
    var data = $(this).data('img');
    $(this).prev('.paremeter__col label').css("background", data)
  });

  $('.paremeter__col input').click(function () {
    if (this.checked) {
      var data = $(this).data('img');
      var sel = $(this).parentsUntil('article').find('.product__img-link picture source');
      $(this).parentsUntil('article').find('.product__img-link').attr('href', 'img/baran/baran-des' + '-' + data + '.jpg');
      sel.attr('srcset', 'img/baran/baran-tab' + '-' + data + '.jpg');
      sel.attr('srcset', 'img/baran/baran-des' + '-' + data + '.jpg');
      $(this).parentsUntil('article').find('.product__img-link picture img').attr('src', 'img/baran/baran-des' + '-' + data + '.jpg');
    }
  });

});

$(function() {
  $('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });
});
