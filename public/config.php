<?php

use Pimple\Container;

$container = new Container;

$container['dsn'] = "mysql:host=localhost;dbname=test";
$container['usuario'] = "root";
$container['senha'] = "";