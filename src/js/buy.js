$(function () {
  $("#buy-form").on('submit', (function (e) {
      e.preventDefault();
      var formData = new FormData($(this)[0]);
      $(".buy-status").hide();
      $('.buy-preloader').show();
      $.ajax({
        url: "php/reviews.php",
        type: "POST",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (response) {
          $(".buy-status").fadeIn('fast');
          $(".buy-preloader").hide();
          if (response.type == "error") {
            $(".buy-status").attr("class", "buy-status__error");
          } else if (response.type == "done") {
            $(".buy-status").attr("class", "buy-status__success");
          }
          $(".buy-status").html(response.text);
        },
        error: function () {
        }
      });
    })
  );
});
