<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "petra.ulicna@hotmail.com"; 
    $subject = "Nová rezervace";
    $reservationName = $_POST["jmeno"];
    $email = $_POST["email"];
    $phone = $_POST["tel"];
    $numPeople = $_POST["pocet"];
    $date = $_POST["datum"];
    $time = $_POST["cas"];
    $additionalInfo = $_POST["info"];
    
    $message = "Název rezervace: $reservationName\n";
    $message .= "Kontaktní email: $email\n";
    $message .= "Kontaktní telefon: $phone\n";
    $message .= "Počet osob: $numPeople\n";
    $message .= "Datum: $date\n";
    $message .= "Čas: $time\n";
    $message .= "Upřesňující informace:\n$additionalInfo\n";
    
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        echo "Zpráva byla úspěšně odeslána.";
    } else {
        echo "Omlouváme se, ale při odesílání zprávy došlo k chybě.";
    }
}
?>