<?php

$container['conn'] = function($c){
    return new \Source\Conn($c['dsn'],$c['usuario'],$c['senha']);
};

$container['produto'] = function($c){
    return new \Source\Produto($c['conn']);
};