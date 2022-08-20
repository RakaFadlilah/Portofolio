<?php
if (empty($_POST['name']) OR empty($_POST['email']) OR empty($_POST['subject']) OR empty($_POST['message'])) {
    echo "<div class='alert alert-danger' role='alert'>Data Harus Terisi Semua</div>";
    die();
}

require_once("connection.php");

$query = "INSERT INTO ContactMe VALUES (?,?,?,?)";
$stmt = $mysql->prepare($query);

$stmt->bind_param("ssss", $name, $email, $subject, $message);

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if ($stmt->execute()) {
    echo "<div class='alert alert-success' role='alert'>Data Berhasil Terkirim</div>";
} else {
    echo "<div class='alert alert-danger' role='alert'>Gagal Terkirim</div>";
}