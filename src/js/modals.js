$(function() {
  $('.product__btn, .icon-phone').click(function (e) {
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
    $('.reviews-modal, #modal-overlay').show();
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
    $('.contacts-modal, #modal-overlay').show();
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
          }
          $('.contacts-status').html(response.text);
        },
        error: function () {
        }
      });
    })
  );
});
