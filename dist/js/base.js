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
      var des = $(this).parentsUntil('article').find('.img-des');
      var tab = $(this).parentsUntil('article').find('.img-tab');
      var mob = $(this).parentsUntil('article').find('.img-mob');
      $(this).parentsUntil('article').find('.product__img-link').attr('href', 'img/baran/baran-des' + '-' + data + '.jpg');
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
