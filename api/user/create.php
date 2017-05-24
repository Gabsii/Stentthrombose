<?php
    session_start();

    header("Access-Control-Allow-Origin: *");

    include_once '../database/constants.php';
    include_once '../database/functions.php';
    include_once '../objects/user.php';

    $conn = create_pdo();

    $product = new Product($conn);

    $inData = json_decode(file_get_contents("php://input"));

    $product->email = $inData->email;
    $product->password = password_hash($inData->password, PASSWORD_DEFAULT);
    $product->name = $inData->name;

    $data = $product->create();
    if ($data->returnCode == 0) {
        $_SESSION['userid'] = $data->id;
        $_SESSION['login'] = 1;
        setcookie("cookiezi", $_SESSION['login'], 0, "/Stentthrombose");
    }
    echo json_encode($data);
?>
