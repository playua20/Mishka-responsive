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
  $('.test-popup-link').magnificPopup({
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


// var beaches = [
//   ['Главный офис', 50.50541, 30.49536, 1],
//   ['Швейная фабрика', 50.50417, 30.50101, 2]
// ];

//   function setMarkers(map) {
//     // Adds markers to the map.
//
//     // Marker sizes are expressed as a Size of X,Y where the origin of the image
//     // (0,0) is located in the top left of the image.
//
//     // Origins, anchor positions and coordinates of the marker increase in the X
//     // direction to the right and in the Y direction down.
//   //   var image = {
//   //     url: '/img/map-turquoise.png',
//   //     // This marker is 20 pixels wide by 32 pixels high.
//   //     size: new google.maps.Size(67, 100),
//   //     // The origin for this image is (0, 0).
//   //     origin: new google.maps.Point(0, 0),
//   //     // The anchor for this image is the base of the flagpole at (0, 32).
//   //     anchor: new google.maps.Point(0, 100)
//   //   };
//   //   // Shapes define the clickable region of the icon. The type defines an HTML
//   //   // <area> element 'poly' which traces out a polygon as a series of X,Y points.
//   //   // The final coordinate closes the poly by connecting to the first coordinate.
//   //   var shape = {
//   //     // coords: [1, 1, 1, 100, 67, 100, 67, 1],
//   //     type: 'poly'
//   //   };
//   //   for (var i = 0; i < beaches.length; i++) {
//   //     var beach = beaches[i];
//   //     var marker = new google.maps.Marker({
//   //       position: {lat: beach[1], lng: beach[2]},
//   //       map: map,
//   //       icon: image,
//   //       shape: shape,
//   //       title: beach[0],
//   //       zIndex: beach[3]
//   //     });
//   //   }
//   // }
// initMap();
