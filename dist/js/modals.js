$(function() {
  $('.product__btn').click(function (e) {
    e.preventDefault();
    $('.buy-modal, #modal-overlay').show();
    $('.buy-btn').focus();
  });
});

$(function () {

  // var code = e.keyCode || e.which == 13 || 27 || 32;

  function rm() {
    $('.buy-modal, .reviews-modal, #modal-overlay').fadeOut('fast');
  };

  $('.buy-btn').bind('keydown || click', function (e) {
    if (e.keyCode || e.which == 13 || 27 || 32) {
      rm();
    }
  });

  // $(window).bind('keydown', function (e) {
  //   if (e.keyCode || e.which == 13 || 27 || 32) {
  //     rm();
  //   }
  // });

  $('#modal-overlay').on('click', function () {
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
  $("#reviews-form").on('submit', (function (e) {
      e.preventDefault();
      var formData = new FormData($(this)[0]);
      $(".reviews-status").hide();
      $('.reviews-preloader').show();
      $.ajax({
        url: "php/review.php",
        type: "POST",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (response) {
          $(".reviews-status").fadeIn('fast');
          $(".reviews-preloader").hide();
          if (response.type == "error") {
            $(".reviews-status").attr("class", "reviews-status--error");
          } else if (response.type == "done") {
            $(".reviews-status").attr("class", "reviews-status--success");
          }
          $(".reviews-status").html(response.text);
        },
        error: function () {
        }
      });
    })
  );
});
