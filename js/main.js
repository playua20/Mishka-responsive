// $(function () {
//   $('.nav__list').removeClass('nav__list--no-js');
//   $('.hamburger, .hamburger-close').click(function () {
//     $('.nav__list').slideToggle('fast');
//     $('.hamburger-close').fadeToggle(100);
//   });
// });

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

$(function () {
  $("input").checkboxradio();
});

$(function () {

  $('.paremeter__col input').each(function () {
    var data = $(this).data('img');
    $(this).prev('.paremeter__col label').css("background", data)
  });

  $('.paremeter__col input').click(function () {
    if (this.checked) {
      var data = $(this).data('img');

      var webPdes = $(this).parentsUntil('article').find('.webp-des');
      var webPtab = $(this).parentsUntil('article').find('.webp-tab');
      var webPmob = $(this).parentsUntil('article').find('.webp-mob');

      var des = $(this).parentsUntil('article').find('.img-des');
      var tab = $(this).parentsUntil('article').find('.img-tab');
      var mob = $(this).parentsUntil('article').find('.img-mob');


      $(this).parentsUntil('article').find('.product__img-link').attr('href', 'img/baran/baran-des' + '-' + data + '.jpg');
      // $(this).parentsUntil('article').find('.product__img-link').attr('href', 'img/baran/baran-des' + '-' + data + '.webp');

      webPdes.attr('srcset', 'img/baran/baran-des' + '-' + data + '.webp 1x, img/baran/baran-des' + '-' + data + '@2x.webp 2x');
      webPtab.attr('srcset', 'img/baran/baran-tab' + '-' + data + '.webp 1x, img/baran/baran-des' + '-' + data + '@2x.webp 2x');
      webPmob.attr('src', 'img/baran/baran-mob' + '-' + data + '.webp').attr('srcset', 'img/baran/baran-mob' + '-' + data + '@2x' + '.webp' + ' ' + '2x');

      des.attr('srcset', 'img/baran/baran-des' + '-' + data + '.jpg 1x, img/baran/baran-des' + '-' + data + '@2x.jpg 2x');
      tab.attr('srcset', 'img/baran/baran-tab' + '-' + data + '.jpg 1x, img/baran/baran-des' + '-' + data + '@2x.jpg 2x');
      mob.attr('src', 'img/baran/baran-mob' + '-' + data + '.jpg').attr('srcset', 'img/baran/baran-mob' + '-' + data + '@2x' + '.jpg' + ' ' + '2x');
    }
  });

});

$(function () {
  $('.product__img-link').magnificPopup({
    type: 'image'
    // other options
  });
});

$(function () {
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: new google.maps.LatLng(50.505, 30.498),
      mapTypeId: 'roadmap'
    });
    var iconPath = '/img/';
    var icons = {
      main: {
        icon: iconPath + 'map-turquoise.png',
        title: 'Главный офис'
      },
      work: {
        icon: iconPath + 'map-pink.png',
        title: 'Швейная фабрика'
      }
    };
    var features = [
      {
        position: new google.maps.LatLng(50.50541, 30.49536),
        type: 'main',
        title: 'main'
      }, {
        position: new google.maps.LatLng(50.50417, 30.50101),
        type: 'work',
        title: 'work'
      }
    ];
    features.forEach(function (feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map,
        title: icons[feature.title].title,
      });
    });
  }

  initMap();
});

$(function () {
  $('a[href^="#"]').not('a[href="#tabs-1"], a[href="#tabs-2"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 'fast', 'swing', function () {
      window.location.hash = target;
    });
    // $target.delay(100).effect("highlight", {color:"#FF86D2"},1000);
    // $target.delay(100).addClass('target-anime').delay(1000).removeClass('target-anime');
    // $target.addClass('target-anime');
    // $target.removeClass('target-anime', 1000);
    // $target.css('background', 'red');


    (function ($) {

      $.fn.extend({

        addTemporaryClass: function (className, duration) {
          var elements = this;
          setTimeout(function () {
            elements.removeClass(className);
          }, duration);

          return this.each(function () {
            $(this).addClass(className);
          });
        }
      });

    })(jQuery);

    $target.addTemporaryClass("target-anime", 3000);
  });
});

$(function () {
  $('.product__btn, .icon-phone, .video__btn').on('click', function (e) {
    e.preventDefault();
    $('.buy-modal, #modal-overlay').fadeIn(150);
    $('.buy-btn').focus();
  });
});

$(function () {

  // var code = e.keyCode || e.which == 13 || 27 || 32;

  function rm() {
    $('.buy-modal, .reviews-modal, .contacts-modal, #modal-overlay').hide();
  };

  $('.buy-btn').bind('keydown || click', function (e) {
    if (e.keyCode || e.which == 13 || 27 || 32) {
      rm();
    }
  });

  $(window).bind('keydown', function (e) {
    if (e.keyCode == 27) {
      rm();
    }
  });

  $('#modal-overlay, .reviews-btn__close, .contacts-btn__close').on('click', function () {
    rm();
  });

});

$(function () {
  $('.reviews__btn').click(function (e) {
      e.preventDefault();
    $('.reviews-modal, #modal-overlay, .reviews-btn__success').show();
      $('.reviews-btn__success').parent().show();
      $('.reviews-btn__close').text('Отменить');
      $('.reviews-btn__close').attr('title', 'Отменить');
      $('.reviews-btn__close').removeClass('.reviews-btn__ok');
  });
});

$(function () {
  $('.reviews-btn__ok').click(function (e) {
      e.preventDefault();
    $('#reviews-form input, #reviews-form textarea').val('');
    $('.reviews-status').hide();
  });
});

$(function () {
  $('.reviews-modal').on('click', '.reviews-btn__ok', function (e) {
    e.preventDefault();
    $('#reviews-form input, #reviews-form textarea').val('');
    $('.reviews-status, reviews-status--success, reviews-status--error').hide();
  });
});

$(function () {
  $('#reviews-form').on('submit', (function (e) {
      e.preventDefault();
      var formData = new FormData($(this)[0]);
      $('.reviews-status').hide();
      $('.reviews-preloader').show();
      $.ajax({
        url: "php/reviews.php",
        type: "POST",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (response) {
          // $('.reviews-status').fadeIn('fast');
          $('.reviews-status').show();
          $('.reviews-preloader').hide();
          if (response.type == 'error') {
            $('.reviews-status').addClass('reviews-status--error');
          } else if (response.type == 'done') {
            $('.reviews-status').addClass('reviews-status--success');
            $('.reviews-btn__success').parent().hide();
            $('.reviews-btn__close').addClass('reviews-btn__ok');
            $('.reviews-btn__close').text('Ok');
            $('.reviews-btn__close').removeAttr('title');
          }
          $('.reviews-status').html(response.text);
        },
        error: function () {
        }
      });
    })
  );
});

$(function () {
  $('.contacts__btn').click(function (e) {
    e.preventDefault();
    $('.contacts-modal, #modal-overlay, .contacts-btn__success').show();
    $('.contacts-btn__success').parent().show();
    $('.contacts-btn__close').text('Отменить');
    $('.contacts-btn__close').attr('title', 'Отменить');
    $('.contacts-btn__close').removeClass('contacts-btn__ok');
  });
});

$(function () {
  $('.contacts-modal').on('click', '.contacts-btn__ok', function (e) {
    e.preventDefault();
    $('#contacts-form input, #contacts-form textarea').val('');
    $('.contacts-status, contacts-status--success, contacts-status--error').hide();
  });
});

$(function () {
  $('#contacts-form').on('submit', (function (e) {
      e.preventDefault();
      var formData = new FormData($(this)[0]);
      $('.contacts-status').hide();
      $('.contacts-preloader').show();
      $.ajax({
        url: "php/contacts.php",
        type: "POST",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (response) {
          // $('.reviews-status').fadeIn('fast');
          $('.contacts-status').show();
          $('.contacts-preloader').hide();
          if (response.type == 'error') {
            $('.contacts-status').addClass('contacts-status--error');
          } else if (response.type == 'done') {
            $('.contacts-status').addClass('contacts-status--success');
            $('.contacts-btn__success').parent().hide();
            $('.contacts-btn__close').addClass('contacts-btn__ok');
            $('.contacts-btn__close').text('Ok');
            $('.contacts-btn__close').removeAttr('title');
          }
          $('.contacts-status').html(response.text);
        },
        error: function () {
        }
      });
    })
  );
});

$(function () {
  $('#order-form').on('submit', (function (e) {
      e.preventDefault();
      var formData = new FormData($(this)[0]);
      $('.order-status').hide();
      $('.order-preloader').show();
      $.ajax({
        url: 'php/order-mail.php',
        type: 'POST',
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (response) {
          $('.order-status').fadeIn('fast');
          $('.order-preloader').hide();
          if (response.type == 'error') {
            $('.order-status').addClass('order-status__error');
          } else if (response.type == 'done') {
            $('.order-status').addClass('order-status__success');
            $('.form__btn').detach();
          }
          $('.order-status').html(response.text);
        },
        error: function () {
          alert('ошибочка');
        }
      });
    })
  );
});

// $(function(){
//   var $refreshButton = $('#refresh');
//   var $results = $('#css_result');
//
//   function refresh(){
//     var css = $('style.cp-pen-styles').text();
//     $results.html(css);
//   }
//
//   refresh();
//   $refreshButton.click(refresh);
//
//   // Select all the contents when clicked
//   $results.click(function(){
//     $(this).select();
//   });
// });

var options = {
  controlBar: {
    volumePanel: {
      inline: false,
      // vertical: true
    }
  },
};

videojs('#my-video', options);

// $(function () {
//   $('#order-form').on('submit', (function (e) {
//       e.preventDefault();
//       var formData = new FormData($(this)[0]);
//       $('.order-status').hide();
//       $('.order-preloader').show();
//       $.ajax({
//         url: 'php/order-mail.php',
//         type: 'POST',
//         dataType: 'json',
//         cache: false,
//         contentType: false,
//         processData: false,
//         data: formData,
//         success: function (response) {
//           $('.order-status').fadeIn('fast');
//           $('.order-preloader').hide();
//           if (response.type == 'error') {
//             $('.order-status').addClass('order-status__error');
//           } else if (response.type == 'done') {
//             $('.order-status').addClass('order-status__success');
//             $('.form__btn').detach();
//           }
//           $('.order-status').html(response.text);
//         },
//         error: function () {
//           alert('ошибочка');
//         }
//       });
//     })
//   );
// });

$(window).resize(function() {
  var recaptcha = $(".g-recaptcha");
  if(recaptcha.css('margin') == '1px') {
    var newScaleFactor = recaptcha.parent().innerWidth() / 304;
    recaptcha.css('transform', 'scale(' + newScaleFactor + ')');
    recaptcha.css('transform-origin', '0 0');
  }
  else {
    recaptcha.css('transform', 'scale(1)');
    recaptcha.css('transform-origin', '0 0');
  }
});
