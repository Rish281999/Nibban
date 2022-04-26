<?php
header("Access-Control-Allow_Origin:*");
header('Access-Control-Allow_Crendentials: true');
header("Access-Control-Allow_Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow_Headers:Origin, X-Requested-With, Content-type, Accept");
header("Content-Type: application/json; charset=UTF-8");
    
    $db_host = 'localhost';
    $db_username = 'root';
    $db_password = '';
    $db_name = 'registration';
    $mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

    if($mysqli->connect_error){
        die('Error':())
    }
?>