<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="description" content="Responsive Admin Template" />
    <meta name="author" content="RedstarHospital" />
    <title>Mais Saude | Login</title>
    <!-- google font -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
	<!-- icons -->
        <link href="<?php echo base_url('assets/css/font-awesome.min.css');?>" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- bootstrap -->
    <link href="<?php echo base_url('assets/tether/css/tether.min.css'); ?>" rel="stylesheet" type="text/css" />
	<link href="<?php echo base_url('assets/bootstrap/css/bootstrap.min.css'); ?>" rel="stylesheet" type="text/css" />
    <!-- style -->
    <link rel="stylesheet" href="<?php echo base_url('assets/css/login.css'); ?>">
	<!-- favicon -->
    <link rel="shortcut icon" href="<?php echo base_url('img/favicon.ico'); ?>" /> 
</head>
<body>
    <div class="form-title">
        <h1>Mais Saude</h1>
    </div>
    <!-- Login Form-->
    <div class="login-form text-center">
        <div class="toggle"><i class="fa fa-user-plus">+</i>
        </div>
        <div class="form formLogin">
            <h2>Faça seu login</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div class="remember text-left">
                    <div class="checkbox checkbox-primary">
                        <input id="checkbox2" type="checkbox" checked>
                        <label for="checkbox2">
                            Lembrar
                        </label>
                    </div>
                </div>
                <button>Entrar</button>
                <div class="forgetPassword"><a href="javascript:void(0)">Esqueceu a senha?</a>
                </div>
            </form>
        </div>
        <div class="form formRegister">
            <h2>Criar uma conta</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Full Name" />
                <input type="tel" placeholder="Phone Number" />
                <button>Register</button>
            </form>
        </div>
        <div class="form formReset">
            <h2>Redefinir sua senha</h2>
            <form>
                <input type="email" placeholder="Email Address" />
                <button>Enviar link</button>
            </form>
        </div>
    </div>
    <!-- start js include path -->
    <script src="<?php echo base_url('assets/jquery.min.js');?>" ></script>
    <script src="<?php echo base_url('assets/login.js');?>"></script>
    <script src="<?php echo base_url('assets/pages.js');?>" ></script>
    <!-- end js include path -->
</body>
</html>