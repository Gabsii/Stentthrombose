<?php
class Product{
    private $conn;
    private $table_name = "products";

    public $id;
    public $email;
    private $password;
    public $name;
    public $loggedIn;

    public function __construct($conn){
        $this->conn = $conn;
        $this->loggedIn = 0;
    }

    function login() {
        try {
            $conn->beginTransaction();

            $loginStmt = $conn->prepare('call userByEmail(:email)');
            $loginStmt->bindParam(':email', $this->email);

            $loginStmt->execute();
            $userData = $loginStmt->fetch();
            $loginStmt->closeCursor();

            if ($userData['id'] != "" && password_verify($this->password, $userData['password'])) {
                $_SESSION['userid'] = $userdata['id'];
                $_SESSION['login'] = 1;
                $response = array('responseCode' => SUCCESS, 'id' => $this->id, 'responseMessage' => 'Successfully logged in');
            } else {
                $response = array('responseCode' => ERROR, 'responseMessage' => 'Username or Password wrong');
            }

        } catch (Exception $e) {
            $response = array('responseCode' => SQL_ERROR, 'responseMessage' => $e);
        }
        return $response;
    }

    function create() {
            $conn->beginTransaction();

            $registerStmt = $conn->prepare("call insertUser(:email, :passwd, :name)");
            $registerStmt->bindParam(':email', $this->email);
            $registerStmt->bindParam(':passwd', $this->password);
            $registerStmt->bindParam(':name', $this->name);
            $registerStmt->execute();

            $this->id = $registerStmt->fetch['id_out'];

            $registerStmt->closeCursor();

            $pdo->commit();
            $response = array('responseCode' => 0, 'id' => $this->id, 'responseMessage' => 'User Successfully registered');
        } catch (Exception $e) {
            $pdo->rollBack();
            $response = array('responseCode' => 12, 'responseMessage' => $e);
        }
        return $response;
    }
}
?>
