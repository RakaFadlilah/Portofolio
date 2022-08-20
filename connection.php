<?php
$servername = "172.21.0.3";
$username = "root";
$password = "toor";
$database = "mydb";

$mysql = new mysqli($servername, $username, $password, $database);

if ($mysql->connect_error) {
    die("Connection Gagal");
}
