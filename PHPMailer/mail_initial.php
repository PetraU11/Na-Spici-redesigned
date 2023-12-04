<?php  
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';

$mail = new PHPMailer(true);


$name = $_POST["jmeno"];
$email = $_POST["email"];
$phone = $_POST["tel"];
$numPeople = $_POST["pocet"];
$date = $_POST["datum"];
$time = $_POST["cas"];
$additionalInfo = $_POST["info"];

$mail->IsSMTP();
$mail->Host = 'mail.webglobe.cz';  
$mail->SMTPSecure = 'tls';
$mail->Port = 587;  
$mail->SMTPAuth = true;                                   //Enable SMTP authentication
$mail->Username = 'info@hospudkanaspici.cz';                     //SMTP username
$mail->Password = 'Spice2023';   


$mail->setFrom($reservationName, 'Rezervace z webu');
$mail->addAddress('info@hospudkanaspici.cz', 'Hospudka Na Spici');  

$mail->isHTML(true);  
$mail->Subject = 'Rezervace z webu Hospudka Na Spici';
$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


if($mail->send()){
echo 'Message has been sent';
} else { 
    echo "Message could not be sent. Mailer Error:" . $mail->ErrorInfo;
}
?>