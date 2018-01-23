<?php

/**
 * Description of Usuario
 *
 * @author deigon
 */
class Usuario extends CI_Model{

    public function buscar($email) {
        $this->db->where(array("email" => $email));
        return $this->db->get('usuarios')->result_array();
    }

}
