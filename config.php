<?php
$host ='localhost';
$user ='root';
$pass ='';
$db_name ='db_portofoliopts';


$conn = mysqli_connect($host,$user,$pass,$db_name);

if($conn->connect_errno){
    echo "Koneksi Gagal : " . $conn->connect_error;
    die("eror!");
} 
?>