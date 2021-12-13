<?php
require_once 'conecta.php';

session_start();

if(isset($_POST['entrar'])):
	$erros = array();
	$email = mysqli_escape_string($conexao, $_POST['email']);
	$senha = mysqli_escape_string($conexao, $_POST['senha']);

	if(isset($_POST['lembre-me'])):

		setcookie('email', $email, time()+3600);
		setcookie('senha', $senha, time()+3600);
	endif;

	if(empty($email) or empty($senha)):
		$erros[] = "<li> O campo login/senha precisa ser preenchido </li>";
	else:

		$sql = "SELECT E_mail FROM usuario WHERE E_mail = '$email'";
		$resultado = mysqli_query($conexao, $sql);		

		if(mysqli_num_rows($resultado) > 0):
		    
		$sql = "SELECT * FROM usuario WHERE E_mail = '$email' AND Senha = '$senha'";



		$resultado = mysqli_query($conexao, $sql);

			if(mysqli_num_rows($resultado) == 1):
				$dados = mysqli_fetch_array($resultado);
				mysqli_close($conexao);
				$_SESSION['logado'] = true;
				$_SESSION['Nome'] = $dados['Nome'];
				header('Location: principal.php');
			else:
				$erros[] = "<li> Email e senha não conferem </li>";
			endif;

		else:
			$erros[] = "<li> Conta inexistente </li>";
		endif;

	endif;

endif;
?>

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="imagem/svg" href="./img/mundo.svg" />
    <title>Login - Travel Around America</title>
  </head>

  <!--STYLES-->
  <link rel="stylesheet" href="login.css" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&family=Poppins:wght@300;400;500&display=swap"
    rel="stylesheet"
  />

  <body>
    <div class="container">
      <div class="img">
        <img class="login" src="./img/loginsvg.svg" />
      </div>
      <div class="f">
        <div class="formu">
          <img class="logo" src="./img/logo.svg" />
          <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            
          
              <input type="text" placeholder="E-mail:" id="email" name="email" required value="<?php echo isset($_COOKIE['login']) ? $_COOKIE['login'] : '' ?>"/>

              <input type="password" placeholder="Senha:" id="senha" name="senha" required value="<?php echo isset($_COOKIE['senha']) ? $_COOKIE['senha'] : '' ?>"/>

              <div class="s">
              <img id="o" src="./img/olhoechado.svg" />
            </div>
          
            Lembre me: <input type="checkbox" name="lembre-me"><br>

            <input type="submit" value="ENTRAR" id="entrar" name="entrar" />
            <h4><a href="index.html">Voltar</a></h4>


            <?php 
if(!empty($erros)):
	foreach($erros as $erro):
		echo $erro;
	endforeach;
endif;
?>

          </form>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>KMLY - 2021 ©</p>
    </footer>

    <script src="./login.js"></script>
  </body>
</html>
