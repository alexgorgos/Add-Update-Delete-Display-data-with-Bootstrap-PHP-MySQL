$(document).ready(function(){
    
    var captId, nameToEdit, urlToEdit, typeToEdit;
    var failInTable = "<tr><td colspan='5' class='danger alert-danger text-center'><strong>Error!</strong> Data cannot be displayed!</td></tr>";
    displaySources();
    
    $("#add-source").on('click', function(){
        $("form.source")[0].reset();
        $("#cancelSource").html("<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Cancel")
    });
    
    
    $("#addSource").on('click', function(){
        $("#error-source").hide();
        $("#add-response").html("");
        var sourceName = $("#source-name").val();
        var sourceUrl = $("#source-url").val();
        var sourceType = $("#source-type").val();
        var error = "";
        
        if (sourceName.length == "0") {
            error = "<li> Source name field cannot be empty! </li>"
        }
        
        if (sourceUrl.length == "0") {
            error += "<li> Source url field cannot be empty </li>"
        }
        
        if (sourceType.length == "0") {
            error += "<li> Source type field cannot be empty </li>"
        }
        
        if ( error != "" ) {
            $("#error-source ul").html(error);
            $("#error-source").show();
        } else {
            addSource();
        }
    });
    
    
    $("#editSource").on('click', function(){
        $("#error-edit-source").hide();
        $("#add-edit-response").html("");
        var sourceName = $("#source-edit-name").val();
        var sourceUrl = $("#source-edit-url").val();
        var sourceType = $("#source-edit-type").val();
        var error = "";
        
        if (sourceName.length == "0") {
            error = "<li> Source name field cannot be empty! </li>"
        }
        
        if (sourceUrl.length == "0") {
            error += "<li> Source url field cannot be empty </li>"
        }
        
        if (sourceType.length == "0") {
            error += "<li> Source type field cannot be empty </li>"
        }
        
        if ( error != "" ) {
            $("#error-edit-source ul").html(error);
            $("#error-edit-source").show();
        } else {
            editSource();
        }
        
    });
    
    
    $("#deleteSource").on('click', function(){
        deleteSource();
    });
    
    
    function displaySources() {
        $("#loading").show();
        $.ajax({
            method: "GET",
            url: "displaySources.php",
            dataType: "html",
            cache: false
        })
         .done(function(response){
            $("#sources tbody").html(response);
            $("#loading").hide();
            
            $(".delete-source").each(function(index){
                $(this).on('click', function(){
                    captId = $(this).closest('tr').attr('id');
                    $("#deleteSource").show();
                    $("#add-response-deleted").html("");
                })
            });
            
            $(".edit-source").each(function(index){
                $(this).on('click', function(){
                    captId = $(this).closest('tr').attr('id');
                    var row = "tr#" + captId;
                    nameToEdit = $(row + " td.name").text();
                    urlToEdit = $(row + " td.url").text();
                    typeToEdit = $(row + " td.type").text();
                    
                    $("#source-edit-name").val(nameToEdit);
                    $("#source-edit-url").val(urlToEdit);
                    $("#source-edit-type").val(typeToEdit);
                    
                    $("#editSource").show();
                    $("#add-edit-response").html("");
                })
            });
        })
         .fail(function(){
            $("#sources tbody").html(fail);
            $("#loading").hide();
        })
    }
    
    function addSource() {
        $.ajax({
            method: "POST",
            url: "addSource.php",
            data: $("form.source").serialize()
        })
         .done(function(response){
            displaySources();
            $("#add-response").html(response);
            $("form.source")[0].reset();
            $("#cancelSource").html("<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Close");
        })
         .fail(function(response){
            $("#add-response").html(response);
        })
        
    }
    
    function editSource() {
        $.ajax({
            method: "POST",
            url: "editSource.php",
            data: $("form.editSource").serialize() + "&" + "id=" + captId
        })
         .done(function(response){
            displaySources();
            $("#add-edit-response").html(response);
            $("#cancelEditSource").html("<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Close");
        })
         .fail(function(response){
            $("#add-edit-response").html(response);
        })
    }
    
    function deleteSource() {
        $.ajax({
            method: "POST",
            url: "deleteSource.php",
            data: {id: captId}
        })
         .done(function(response){
            displaySources();
            $("#add-response-deleted").html(response);
            $("#cancelDelete").html("<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Close");
            $("#deleteSource").hide();
        })
         .fail(function(response){
            $("#add-response-deleted").html(response);
        })
        
    }
    
    
    
    
});

