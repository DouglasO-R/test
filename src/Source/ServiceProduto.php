<?php
namespace Source;

class ServiceProduto implements IServiceProduto{
    
    private $db;

    public function __construct(IConn $db){
        $this->db = $db->connect();
    }
    
    public function listar(){
        
        $query = "select * from produtos";

        $stmt = $this->db->prepare($query);

        $stmt->execute();

       return $stmt->fetchALL(\PDO::FETCH_ASSOC);
    }

    public function salvar(){


    }
    public function update(){


    }
    public function delete(){


    }
}
