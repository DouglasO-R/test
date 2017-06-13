<?php
require_once'class\Produto.php';
require_once'class\IConn.php';
require_once'class\Conn.php';
require_once'class\Conteiner.php';

$db = Conteiner::getConn();

$produto = Conteiner::getProduto();

$list = $produto->listar();

var_dump($list);
?>