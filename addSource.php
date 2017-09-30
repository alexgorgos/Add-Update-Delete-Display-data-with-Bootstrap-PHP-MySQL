<?php

require_once('db.php');

$name = $_POST['source-name'];
$url = $_POST['source-url'];
$type = $_POST['source-type'];

$insert = "INSERT INTO movie_sources (name, url, type) VALUES('$name','$url','$type')";

if(mysqli_query($link, $insert)) {
    
    echo '
        <div class="alert alert-success">
            <strong>Success!</strong> The source was added !!!
        </div>';
    
} else {
    
    echo '
        <div class="alert alert-warning">
            <strong>Warning!</strong> The source could not be added !!!
        </div>';
}

mysqli_close($link);

?>
