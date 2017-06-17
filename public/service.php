<?php

$container['conn'] = function($c){
    return new \Source\Conn($c['dsn'],$c['usuario'],$c['senha']);
};

$container['produto'] = function(){
    return new \Source\Produto;
};

$container['ServiceProduto'] = function($c){
    return new \Source\ServiceProduto($c['conn'],$c['produto']);
};