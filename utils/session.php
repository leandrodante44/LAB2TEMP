<?php
    session_start();
    if((isset($_GET['option']) && $_GET['option'] == 'set') && !isset($loadsession)){
        $_SESSION["user_id"] = $_GET['newsession'];
        header("Location: ../views/dashboard.php"); 
        exit();
    }else{
        if($loadsession && isset($_SESSION["user_id"])){
            //logado
        }else{
            header("Location: ../views/login.php"); 
            exit();
        }
    }
?>