<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Login
 *
 * @author deigon
 */
class Login extends CI_Controller {

    //put your code here
    
    public function index() {
        if (is_null($this->session->userdata('logado'))) {
            $this->load->helper('form');
            $this->load->view('login');
        } else {
            $this->load->view("inicio");
        }
    }


    public function autenticar() {
        $this->load->model('usuario');
        $this->load->library('criptografia');

        $consulta = $this->usuario->buscar($this->input->post('email'));
        $bdSalt = $consulta[0]['salt'];

        $encript = $this->criptografia->hashHX($this->input->post('senha'), $bdSalt);

        if ($consulta[0]['status'] != 0) {
            if ($consulta[0]['senha'] === $encript['password']) {
                $this->session->set_userdata("logado", $consulta);
                $this->load->helper('form');
                $this->load->view('inicio');
            } else {
                $erro = array('msg' => 'Email ou senha invalido!');
                $this->load->helper('form');
                $this->load->view('login', $erro);
            }
        } else {
            $erro = array('msg' => 'Usuario bloqueado! <br>Contate o adiministrador.');
            $this->load->helper('form');
            $this->load->view('login', $erro);
        }
    }

    public function sair() {
        $this->session->sess_destroy();
        $this->load->helper('form');
        redirect('/login/index', 'location');
    }

}
