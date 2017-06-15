<?php
require_once"../vendor/autoload.php";

$db = Conteiner::getConn();

$produto = Conteiner::getProduto();

$list = $produto->listar();

var_dump($list);

?>