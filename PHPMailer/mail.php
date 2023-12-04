<?php  
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';

$res = "";

if(isset($_POST["tlacitko"])){
$name = $_POST["jmeno"];
$email = $_POST["email"];
$phone = $_POST["tel"];
$numPeople = $_POST["pocet"];
$date = $_POST["datum"];
$time = $_POST["cas"];
$additionalInfo = $_POST["info"];
$body = "Hello <br> $email <br> datum: $date";

try{ 
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsSMTP();
$mail->Host = 'mail.webglobe.cz';  
$mail->Username = 'info@hospudkanaspici.cz';                   
$mail->Password = 'Spice2023';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;  
$mail->SMTPAuth = true;  
$mail->setFrom('info@hospudkanaspici.cz', 'Rezervace z webu');
$mail->addAddress('info@hospudkanaspici.cz', 'Hospudka Na Spici');   
$mail->isHTML(true); 
$mail->Subject = 'Rezervace z webu Hospudka Na Spici';
$mail->Body = $body;
$mail->AltBody = strip_tags($body);
$mail->send();

$res="Email byl uspěšně odeslán"

}catch(Exception $e){$res="Email Error: $mail->ErrorInfo"}
}                               
?>