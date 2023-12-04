<?php

// Nastavíme kódování
mb_internal_encoding("UTF-8");

// Získáme data z formuláře
$jmeno = $_POST["jmeno"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$pocet = $_POST["pocet"];
$datum = $_POST["datum"];
$cas = $_POST["cas"];
$info = $_POST["info"];

// Zkontrolujeme, zda jsou data vyplněna
if (!isset($jmeno) || $jmeno == "") {
    echo "Název rezervace musí být vyplněn.";
    exit;
}

if (!isset($email) || $email == "") {
    echo "E-mailová adresa musí být vyplněna.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "E-mailová adresa není platná.";
    exit;
}

if (!isset($tel) || $tel == "") {
    echo "Telefonní číslo musí být vyplněno.";
    exit;
}

if (!preg_match("/^[0-9]{9,12}$/", $tel)) {
    echo "Telefonní číslo není platné.";
    exit;
}

if (!isset($pocet) || $pocet <= 0) {
    echo "Počet osob musí být větší než 0.";
    exit;
}

if (!isset($datum) || $datum == "") {
    echo "Datum musí být vyplněno.";
    exit;
}

if (!isset($cas) || $cas == "") {
    echo "Čas musí být vyplněn.";
    exit;
}

// Vytvoříme hlavičku emailu
$hlavicka = "From: $jmeno <$email>";
$hlavicka .= "\nMIME-Version: 1.0\n";
$hlavicka .= "Content-Type: text/html; charset=\"utf-8\"\n";

// Vytvoříme tělo emailu
$telo = "<h1>Nová rezervace</h1>";
$telo .= "<p>Název rezervace: $jmeno</p>";
$telo .= "<p>E-mailová adresa: $email</p>";
$telo .= "<p>Telefonní číslo: $tel</p>";
$telo .= "<p>Počet osob: $pocet</p>";
$telo .= "<p>Datum: $datum</p>";
$telo .= "<p>Čas: $cas</p>";
$telo .= "<p>Upřesňující informace: $info</p>";

// Odešleme email
if (mail("info@hospudkanaspici.cz", "Nová rezervace", $telo, $hlavicka)) {
    echo "Rezervace byla úspěšně odeslána.";
} else {
    echo "Při odesílání rezervace došlo k chybě.";
}

?>
