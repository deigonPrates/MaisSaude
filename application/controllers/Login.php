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
        $this->load->helper('form');
        $this->load->view('login');
    }
}
