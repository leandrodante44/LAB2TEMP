<?php
    session_start();
    if((isset($_GET['option']) && $_GET['option'] == 'set') && !isset($loadsession)){
        $_SESSION["id_user"] = $_GET['newsessionid'];
        $_SESSION["company"] = $_GET['newsessioncomp'];
        $_SESSION["name_user"] = $_GET['newsessionname'];
        $_SESSION["email_user"] = $_GET['newsessionmail'];
        $_SESSION["level_user"] = $_GET['newsessionlevel'];
        header("Location: ../views/dashboard.php"); 
        exit();
    }else{
        if($loadsession && isset($_SESSION["id_user"])){
            //logado
        }else{
            header("Location: ../views/login.php"); 
            exit();
        }
    }
?>