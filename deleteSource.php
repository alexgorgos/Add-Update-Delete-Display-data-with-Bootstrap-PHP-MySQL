<?php

require_once('db.php');

$id = $_POST['id'];

$delete = "DELETE FROM movie_sources WHERE id='$id'";

if(mysqli_query($link, $delete)) {
    
    echo '
        <div class="alert alert-success">
            <strong>Success!</strong> The source was deleted !!!
        </div>';
    
} else {
    
    echo '
        <div class="alert alert-warning">
            <strong>Warning!</strong> The source could not be deleted !!!
        </div>';
}

mysqli_close($link);

