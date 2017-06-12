<?php
    $host = "localhost";
    $db_name = "stentthromboseDB";
    $username = "root";
    $password = "";
    $user;

    $conn = new PDO('mysql:host='.$host.';dbname='.$db_name.';charset=utf8', $username, $password);

    include_once '../objects/user.php';
    $user = new User($conn);
?>
