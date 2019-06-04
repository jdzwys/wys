<?php

    include('./connother.php');

    $userphone = $_REQUEST['usernum'];
    $userpwd  = $_REQUEST['userpwd'];

    $sql ="select * from user where user_phone='$userphone' and user_pwd='$userpwd'";

    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo"<script>alert('登陆成功，点击跳转');
        location.href ='../html/noun.html'</script>";
    }else{
        echo "<script>alert('登录失败，请重新登录');
        location.href='../html/register.html'</script>";
    }
?>