<?php
    private $host = "localhost";
    private $db_name = "stentthromboseDB";
    private $username = "root";
    private $password = "";

    function create_pdo() {
        return new PDO('mysql:host='.$host;'dbname='$db_name;'charset=utf8', $username, $password);
    }
?>
