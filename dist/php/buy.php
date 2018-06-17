<?php
require('keys.php');
require('phpmailer/src/PHPMailer.php');
require('phpmailer/src/SMTP.php');

$name = filter_var($_POST["product"], FILTER_SANITIZE_STRING);
$name = filter_var($_POST["height"], FILTER_SANITIZE_STRING);
$name = filter_var($_POST["price"], FILTER_SANITIZE_STRING);
$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
//$from = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$tel = filter_var($_POST["tel"], FILTER_SANITIZE_NUMBER_INT);
$msg = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);


if (empty($name)) {
  $empty[] = "<b>имя</b>";
}
if (empty($tel)) {
  $empty[] = "<b>контактный телефон</b>";
}
if (!empty($empty)) {
  $output = json_encode(array('type' => 'error', 'text' => 'Напишите ' . implode(", ", $empty)));
  die($output);
}

$br = '<br>';
$body = 'Имя: ' . $name . $br .
  'Электронная почта: ' . $from . $br .
  'Тел.: ' . $tel . $br .
  'Сообщение: ' . $msg;

$to = 'admin@mishkas.kl.com.ua';
$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$subject = 'mishkas.kl.com.ua - новое сообщение от ' . $name;

// $mail = new PHPMailer();
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Username = "admin@mishkas.kl.com.ua";
$mail->Password = "Dk086818";
$mail->Host = "mail.zzz.com.ua";
$mail->Mailer = "smtp";
$mail->SetFrom($to, $name);
// $mail->AddReplyTo($_POST["admin@mishkas.kl.com.ua"], $_POST["admin@mishkas.kl.com.ua"]);
$mail->AddAddress("admin@mishkas.kl.com.ua");
//$mail->Subject = $_POST["subject"];
//$mail->WordWrap   = 80;
//$mail->MsgHTML($_POST["msg"]);

$mail->Subject = $subject;
$mail->Body = $body;
$mail->IsHTML(true);

//if(!$mail->Send()) {
//	echo "<p class='error'>Проблемы с отправкой!</p>";
//} else {
//	echo "<p class='success'>Сообщение отправлено!</p>";
//}
//

//if (!$mail->Send()) {
//  $output = json_encode(array('type' => 'error', 'text' => 'Не удалось отправить письмо, пожалуйста, свяжитесь с нами: ' . '<b>' . $to . '<b>'));
//  die($output);
//} else {
//  $output = json_encode(array('type' => 'done', 'text' => $name . ', заказ принят!'));
//  die($output);
//}
//

if (!$mail->Send()) {
  $output = json_encode(array('type' => 'error', 'text' => 'Не удалось отправить письмо, пожалуйста, свяжитесь с нами: ' . '<b>' . $to . '<b>'));
  die($output);
} else {
  $output = json_encode(array('type' => 'done', 'text' => '<div class="buy__success">
  <h2>' . $name . ', Спасибо за заказ. Вам перезвонят!</h2>
  <p>Если Вам не перезвонили, свяжитесь с нами: <br> +38 (050) 555-55-55</p>
</div>
'));
  die($output);
}
?>
