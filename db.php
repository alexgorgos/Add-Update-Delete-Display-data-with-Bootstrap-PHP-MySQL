<?php

//ini_set('display_errors', 1);
//error_reporting(~0);

// db properties
////////////////////
//db server location
define ('DBHOST','');					
//db name
define ('DBNAME','');				       
//db username
define ('DBUSER','');
//db password
define ('DBPASS','');                           

$link = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME) or die ("Unable to connect to the server!");

$sql = "
CREATE TABLE IF NOT EXISTS `movie_sources` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` text NOT NULL,
    `url` text NOT NULL,
    `type` text NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = INNODB DEFAULT CHARSET = utf8";

mysqli_query($link,$sql) or die (" Error in creating table movies " );



