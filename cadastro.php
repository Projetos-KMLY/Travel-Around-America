

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="imagem/svg" href="./img/mundo.svg"/>
    <title>Cadastro</title>
</head>
 
<!--STYLES-->
<link rel="stylesheet" href="cadastro.css" />

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&family=Poppins:wght@300;400;500&display=swap"
    rel="stylesheet" />

<body>
    <div class="container">
        <div class="img">
            <img class="login" src="./img/cadastrosvg.svg" />
        </div>
        <div class="f">
            <div class="formu">
                <img class="logo" src="./img/logo.svg" />
                <!---<form method="get" action="proccad.php">
                     <div>
                        <input type="text" placeholder="Nome:" id="nome" name="nome" />
                    </div> 
                    <div>
                        <input type="text" placeholder="E-mail:" id="email" name="email" /> 
                    </div>
                    <div class="senhadiv">
                        <input type="password" placeholder="Senha:" id="senha" name="senha" />
                        <img id="os" src="./img/olhoechado.svg">
                    </div>
                    <div class="senhadiv">
                        <input type="password" placeholder="Confirmar Senha:" id="confsenha" name="confsenha"/>
                       <img id="o" src="./img/olhoechado.svg">
                    </div>
                    <input type="submit" id="entrar" value="CADASTRAR">

                    <h4><a href="index.html">Voltar</a></h4>
                </form>------->

                <form method="get" action="proccad.php">
                    
                        <input type="text" placeholder="Nome:" id="nome" name="nome" required/>
                    
                        <input type="text" placeholder="E-mail:" id="email" name="email" required/> 
                  
                        <input type="password" placeholder="Senha:" id="senha" name="senha" required/>
                       
                        <input type="password" placeholder="Confirmar Senha:" id="confsenha" name="confsenha" required/>
                        
                    <input type="submit" id="entrar" value="CADASTRAR">

                    <h4><a href="index.html">Voltar</a></h4>

                </form>
                
                
            </div>
        </div>
    </div>
    </div>

    <footer class="footer">

        <p>KMLY - 2021 ©</p>
  
      
      </footer>

      <script src="cadastro.js"></script>

</body>
</html>