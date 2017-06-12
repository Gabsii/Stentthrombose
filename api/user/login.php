<?php
    session_start();

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    include_once '../database/constants.php';
    include_once '../database/functions.php';
    include_once '../objects/user.php';


    $inData = file_get_contents("php://input");
    $user->email = json_decode($inData)->{'email'};

    $data = $user->login(json_decode($inData)->{'password'});
    if ($data['responseCode'] == 0) {
        $_SESSION['userid'] = $data['id'];
        $_SESSION['login'] = 1;
    }
    echo json_encode($data);
?>
