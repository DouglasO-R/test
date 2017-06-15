<?php
namespace Source;

class Conn implements IConn{

	private $dsn;
	private $usuario;
	private $senha;

	public function __construct($dsn,$usuario,$senha){
		$this->dsn = $dsn;
		$this->usuario = $usuario;
		$this->senha = $senha;
	}
   public function connect(){
       
       return new \PDO($this->dsn,$this->usuario,$this->senha);
   }
}