<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'path/to/PHPMailer/src/Exception.php';
  require 'path/to/PHPMailer/src/PHPMailer.php';

  $mail =  new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->IsHTML(true);

  // Who is the mail from
  $mail->setForm('portfolio@nosovanton.cz', 'Admin');
  // Who is the mail to
  $mail->addAddress('nosov.anton.cz@gmail.com');
  // The mail title
  $mail->Subject = 'Hi! This is about job';

  // The mail body
  $body = '<h1>New job request</h1>';

  $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
  $body.='<p><strong>Company:</strong> '.$_POST['company'].'</p>';
  $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
  $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';

  $mail->Body = $body;

  // Send
  if (!$mail->send()) {
    $message = 'Error';
  } else {
    $message = 'Form sent';
  }

  $response = ['message', $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>