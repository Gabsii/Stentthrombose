<?php
    include 'functions.php';
    include 'constants.php';

    header('Access-Control-Allow-Origin: *');
    session_start();

    $pdo = create_pdo();

    $postData = file_get_contents("php://input");
    $postLogin = json_decode($postData)->{'email'};
    $postPassword = json_decode($postData)->{'password'};

    try {
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();

        $loginStmt = $pdo->prepare('call userByEmail(:email)');
        $loginStmt->bindParam(':email', $postLogin);

        $loginStmt->execute();
        $userData = $loginStmt->fetch();
        $loginStmt->closeCursor();

        if ($userData['id'] != "" && password_verify($postPassword, $userData['password'])) {
            $_SESSION['userid'] = $userdata['id'];
            $_SESSION['login'] = 1;
            $response = array('responseCode' => SUCCESS, 'responseMessage' => 'Successfully logged in');
        } else {
            $response = array('responseCode' => ERROR, 'responseMessage' => 'Username or Password wrong');
        }

    } catch (Exception $e) {
        $response = array('responseCode' => SQL_ERROR, 'responseMessage' => $e);
    }
    echo json_encode($response);
?>
