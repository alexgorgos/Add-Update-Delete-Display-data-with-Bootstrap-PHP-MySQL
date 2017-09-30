<?php

require_once('db.php');

$id = $_POST['id'];
$name = $_POST['source-edit-name'];
$url = $_POST['source-edit-url'];
$type = $_POST['source-edit-type'];



$update = "UPDATE movie_sources SET name='$name', url='$url', type='$type' WHERE id='$id'";

if(mysqli_query($link, $update)){
    
    echo '
        <div class="alert alert-success">
            <strong>Success!</strong> The source was edited !!!
        </div>';
    
} else {
    
    echo '
        <div class="alert alert-warning">
            <strong>Warning!</strong> The source could not be edited !!!
        </div>';
    
}

mysqli_close($link);

