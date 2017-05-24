<?php
    header("Access-Control-Allow-Origin: *");

    include_once '../database/constants.php';
    include_once '../database/functions.php';
    include_once '../objects/user.php';

    $conn = create_pdo();

    $product = new Product($conn);

    $inData = json_decode(file_get_contents("php://input"));

    $product->email = $inData->email;
    $product->password = $inData->password;
    $product->name = $inData->name;

    $data = $product->create();
    echo json_encode($data);
?>
