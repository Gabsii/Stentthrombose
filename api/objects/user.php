<?php
class Product{
    private $conn;
    private $table_name = "products";

    public $id;
    public $email;
    private $password;
    Public $name;

    public function __construct($conn){
        $this->conn = $conn;
    }

    function login() {
        try {
            $pdo->beginTransaction();

            $loginStmt = $pdo->prepare('call userByEmail(:email)');
            $loginStmt->bindParam(':email', $this->email);

            $loginStmt->execute();
            $userData = $loginStmt->fetch();
            $loginStmt->closeCursor();

            if ($userData['id'] != "" && password_verify($this->password, $userData['password'])) {
                $_SESSION['userid'] = $userdata['id'];
                $_SESSION['login'] = 1;
                $response = array('responseCode' => SUCCESS, 'responseMessage' => 'Successfully logged in');
            } else {
                $response = array('responseCode' => ERROR, 'responseMessage' => 'Username or Password wrong');
            }

        } catch (Exception $e) {
            $response = array('responseCode' => SQL_ERROR, 'responseMessage' => $e);
        }
        return $response;
    }
}
?>
