<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/PHPMailer/src/Exception.php';
require 'vendor/PHPMailer/src/PHPMailer.php';
require 'vendor/PHPMailer/src/SMTP.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//
//$name = $_POST['user_name'];
//$phone = $_POST['user_phone'];
$email = $_POST['user_email'];


$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'aslanyan.vanik@list.ru';
$mail->Password = 'CmyJ0kEJTFqRWhXqaBqw';
$mail->SMTPSecure = 'ssl'; //tls ssl
$mail->Port = 465; //587 465

$mail->setFrom('aslanyan.vanik@list.ru');   ///aslanianvan@gmail.com
$mail->addAddress('elitecruises.am@gmail.com');

$mail->isHTML(true);

$mail->Subject = 'Request!!';
$mail->Body    = '<br> Her Mail:  ' .$email;

if(!$mail->send()) {
    echo 'Error';
} else {
    echo header("location:index.html");;
}
