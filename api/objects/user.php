<?php
class User{
    private $conn;

    public $id;
    public $email;
    public $password;
    public $name;
    public $loggedIn;

    public function __construct($conn){
        $this->conn = $conn;
        $this->loggedIn = 0;
    }

    function login($pass_raw) {
        try {
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->beginTransaction();

            $loginStmt = $this->conn->prepare('call userByEmail(:email)');
            $loginStmt->bindParam(':email', $this->email);

            $loginStmt->execute();
            $userData = $loginStmt->fetch();
            $loginStmt->closeCursor();

            if ($userData['id'] != "" && password_verify($pass_raw, $userData['password'])) {
                $_SESSION['userid'] = $userData['id'];
                $_SESSION['login'] = 1;
                $response = array('responseCode' => SUCCESS, 'id' => $this->id, 'responseMessage' => 'Successfully logged in');
            } else {
                $response = array('responseCode' => ERROR, 'responseMessage' => 'Username or Password wrong');
            }

            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollBack();
            $response = array('responseCode' => SQL_ERROR, 'responseMessage' => $e->getMessage());
        }
        return $response;
    }

    function create() {
        try {
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->beginTransaction();

            if ($this->email == '' || $this->password == '' || $this->name == '') {
                throw new Exception("Missing Registration data", 1);
            }

            $registerStmt = $this->conn->prepare("call insertUser(:name, :email, :passwd, @id_out)");
            $registerStmt->bindParam(':email', $this->email);
            $registerStmt->bindParam(':passwd', $this->password);
            $registerStmt->bindParam(':name', $this->name);
            $registerStmt->execute();

            $registerStmt->closeCursor();


            $getIdStmt = $this->conn->prepare("call userByEmail(:email)");
            $getIdStmt->bindParam(':email', $this->email);
            $getIdStmt->execute();
            $this->id = $getIdStmt->fetch()['id'];

            $getIdStmt->closeCursor();
            $this->conn->commit();
            $response = array('responseCode' => 0, 'id' => $this->id, 'responseMessage' => 'User Successfully registered');
        } catch (Exception $e) {
            $this->conn->rollBack();
            $response = array('responseCode' => 12, 'responseMessage' => $e->getMessage(), 'this' => $fetchData);
        }
        return $response;
    }
}
?>
