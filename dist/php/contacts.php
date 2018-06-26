<?php
//require('keys.php');
require('phpmailer/src/PHPMailer.php');
require('phpmailer/src/SMTP.php');

$name = filter_var($_POST["reviews-name"], FILTER_SANITIZE_STRING);
$tel = filter_var($_POST["reviews-tel"], FILTER_SANITIZE_NUMBER_INT);
$from = filter_var($_POST["reviews-email"], FILTER_SANITIZE_EMAIL);
$msg = filter_var($_POST["reviews-msg"], FILTER_SANITIZE_STRING);


if (empty($name)) {
  $empty[] = "<b>имя</b>";
}
if (empty($from)) {
  $empty[] = "<b>e-amail</b>";
}
if (empty($tel)) {
  $empty[] = "<b>e-amail</b>";
}
if (empty($msg)) {
  $empty[] = "<b>отзыв</b>";
}
if (!empty($empty)) {
  $output = json_encode(array('type' => 'error', 'text' => 'Напишите ' . implode(", ", $empty)));
  die($output);
}

if (!filter_var($from, FILTER_VALIDATE_EMAIL)) { //email validation
  $output = json_encode(array('type' => 'error', 'text' => '<b>' . $from . '</b>' . ' неверный email, пожалуйста, исправьте его.'));
  die($output);
}

$br = '<br>';
$body = 'Имя: ' . $name . $br .
  'e-mail: ' . $from . $br .
  'Отзыв: ' . $msg;

$to = 'admin@sedona.kl.com.ua';
$subject = 'mishka.kl.com.ua - новое сообщение от ' . $name;

// $mail = new PHPMailer();
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Username = "admin@sedona.kl.com.ua";
$mail->Password = "Dk086818";
$mail->Host = "mail.zzz.com.ua";
$mail->Mailer = "smtp";
$mail->SetFrom($to, $name);
// $mail->AddReplyTo($_POST["admin@sedona.kl.com.ua"], $_POST["admin@sedona.kl.com.ua"]);
$mail->AddAddress("admin@sedona.kl.com.ua");
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

if (!$mail->Send()) {
  $output = json_encode(array('type' => 'error', 'text' => 'Не удалось отправить письмо, пожалуйста, напишите: ' . '<b>' . $to . '<b>'));
  die($output);
} else {
  $output = json_encode(array('type' => 'done', 'text' => '<p><b>' . $name . ', спасибо, ждите ответа</b></p>'));
  die($output);
}


//if(!$mail->Send()) {
//  $output = json_encode(array('type' => 'error', 'text' => 'Не удалось отправить письмо, пожалуйста, свяжитесь с нами: ' . '<b>' . $to . '<b>'));
//  die($output);
//} else {
//  $output = json_encode(array('type' => 'done', 'text' => $name . ', ждем Вас в назначенное время!'));
//  die($output);
//}
?>
