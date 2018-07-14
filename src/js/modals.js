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
