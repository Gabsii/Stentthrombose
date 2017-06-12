<?php
    session_start();

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include_once '../database/constants.php';
    include_once '../database/functions.php';
    include_once '../objects/user.php';


    $inData = file_get_contents("php://input");

    $user->email = json_decode($inData)->{'email'};
    $user->password = password_hash(json_decode($inData)->{'password'}, PASSWORD_DEFAULT);
    $user->name = json_decode($inData)->{'name'};

    $data = $user->create();
    if ($data['responseCode'] == 0) {
        $_SESSION['userid'] = $data['id'];
        $_SESSION['login'] = 1;
        setcookie("cookiezi", $_SESSION['login'], 0, "/Stentthrombose");
    }
    echo json_encode($data);
?>
