<?php
    session_start();

    header("Access-Control-Allow-Origin: *");

    include_once '../database/constants.php';
    include_once '../database/functions.php';
    include_once '../objects/user.php';


    $inData = json_decode(file_get_contents("php://input"));

    $user->email = $inData->email;
    $user->password = password_hash($inData->password, PASSWORD_DEFAULT);
    $user->name = $inData->name;

    $data = $user->create();
    if ($data['responseCode'] == 0) {
        $_SESSION['userid'] = $data['id'];
        $_SESSION['login'] = 1;
        setcookie("cookiezi", $_SESSION['login'], 0, "/Stentthrombose");
    }
    echo json_encode($data);
?>
