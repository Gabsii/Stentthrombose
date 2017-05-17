<?php
    include 'functions.php';
    include 'constants.php';

    session_start();

    $pdo = create_pdo();

    $postData = file_get_contents("php://input");
    $postEmail = json_decode($post_data)->{'email'};
    $postPassword = json_decode($post_data)->{'password'};
    $postName = json_decode($post_data)->{'name'};

    try {
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();



        $registerStmt = $pdo->prepare("call insertUser(:email, :passwd, :name)");
        $registerStmt->bindParam(':email', $postEmail);
        $registerStmt->bindParam(':passwd', $password);
        $registerStmt->bindParam(':name', $postName);

        $password = password_hash($post_password, PASSWORD_DEFAULT);

        $registerStmt->execute();

        $registerStmt->closeCursor();

        $pdo->commit();
        $response = array('responseCode' => SUCCESS, 'responseMessage' => 'User Successfully registered');
        //YAY hat geklappt
    } catch (Exception $e) {
        $pdo->rollBack();
        $response = array('responseCode' => SQL_FAIL, 'responseMessage' => $e);
    }
    echo json_encode($response);
?>
