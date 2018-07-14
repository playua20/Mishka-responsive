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
