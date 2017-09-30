<?php

require_once('db.php');

$sources = "SELECT * FROM movie_sources";
$results = mysqli_query($link, $sources);


$rowcount=mysqli_num_rows($results);

if ($rowcount > 0) {

    while ($row=mysqli_fetch_array($results)){
        $source_id = $row['id'];
        $source_name = $row['name'];
        $source_url = $row['url'];
        $source_type = $row['type'];

    
    echo "
    <tr id='" . $source_id . "'>
        <td class='name'>" . $source_name . "</td>
        <td class='url'>" . $source_url . "</td>
        <td class='type'>" . $source_type . "</td>
        <td class='text-center'><button type='button' class='btn btn-clr edit-source' data-toggle='modal' data-target='#editSourceModal'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td>
        <td class='text-center'><button type='button' class='btn btn-clr delete-source' data-toggle='modal' data-target='#deleteSourceModal'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td>
    </tr> ";


    }

} else {

  
    echo "
    <tr>
        <td colspan='5' class='alert alert-warning text-center'><strong>Warning!</strong> No entries yet !!!</td>
    </tr>"
    ;



}

mysqli_close($link);

?>