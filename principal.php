<?php
require_once 'conecta.php';

session_start();

if(!isset($_SESSION['logado'])):
	header('Location: login.php');
endif;

          
?>

<!DOCTYPE html>
<html lang="pt_BR">
<head>
  <!-- PAGE INFO -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="imagem/svg" href="./img/mundo.svg" />
  <title>Principal - Travel Around America</title>

  <!-- STYLES -->
  <link rel="stylesheet" href="principal.css" />

  <!-- Icones -->
  <link rel="stylesheet" href="assets/style.css" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&family=Poppins:wght@300;400;500&display=swap"
    rel="stylesheet" />
</head>

<body>
  <header id="header">
    <label><img id="icon" src="img/menu.png" /> </label>
    <a class="logo" href="index.html">
     <img src="img/logo2.svg" alt="logo Travel Around America" />
    </a>
    <nav id="nav">
      <!-- /menu -->
        <ul> 
            <li><a class ="ah" href="principal.html">Página Inicial</a></li>
            <li><a class ="ah" href="usuario.html">Meu Perfil</a></li>
            <li><a class ="ah" href="letras.html">Sair</a></li>
        </ul>
    </nav>
  </header>

  <main class="container">
      <div class="mapa">
        <img class="america" src="img/mapacontinente.gif"/>
      </div>

      <!-- FILTRO -->

      <div class="filtro">
          <h1>SELECIONE UMA CATEGORIA:</h1>
          <div class="categorias">
            <button id="clima" class="button cli">Clima</button>
            <button id="culinaria" class="button cul">Culinária</button>
            <button id="idioma" class="button idi">Idioma</button>
            <button id="pontos" class="button pontos">Pontos Turísticos</button>
          </div>

        <div class="carac">
          <div  class="c" >
            <h2>SELECIONE UM CLIMA</h2>
            <button id="equatorial" type="submit" name="equatorial" value="3" ><img class="equa" src="./img/caracteristicas/equatorial.svg" /></button>
            <button id="quente" type="submit" name="quente" value="4"><img  class="que" src="./img/caracteristicas/quente.svg" /></button>
            <button id="temperado" type="submit" name="temperado" value="2"><img class="temp" src="./img/caracteristicas/temperado.svg" /></button>
            <button id="tropical" type="submit" name="tropical"><img class="trop" src="./img/caracteristicas/tropical.svg" /></button>
            <button id="outros" type="submit" name="outros"><img class="outr" src="./img/caracteristicas/outros.svg" /></button>
</div>
          <div class="culin">
            <h2>SELECIONE UMA CULINÁRIA</h2>
            <button id="caldo" type="submit" name="caldo"><img class="cald" src="./img/caracteristicas/caldo.svg" /></button>
            <button id="exotico" name="exotico"><img class="exo" src="./img/caracteristicas/exotico.svg" /></button>
            <button id="massa" type="submit" name="massa"><img class="mas" src="./img/caracteristicas/massa.svg" /></button>
            <button id="proteina" type="submit" name="proteina"><img class="prot" src="./img/caracteristicas/proteinas.svg" /></button>
            <button id="pratof" type="submit" name="pratof"><img class="pf" src="./img/caracteristicas/PF.svg" /></button>
            <button id="raizes" type="submit" name="raizes"><img class="rai" src="./img/caracteristicas/raizes.svg" /></button>
          </div>

          <div class="idio">
            <h2>SELECIONE UM IDIOMA</h2>
            <button id="espanhol" type="submit" name="espanhol"><img class="esp" src="./img/caracteristicas/espanhol.svg" /></button>
            <button id="ingles" type="submit" name="ingles"><img class="ing" src="./img/caracteristicas/ingles.svg" /></button>
            <button id="outrosidi" type="submit" name="outrosidi"><img class="outri" src="./img/caracteristicas/outrosidi.svg" /></button>
          </div>
          
          <div class="pont">
            <h2>SELECIONE UM PONTO TURÍSTICO</h2>
            <button id="cidade" type="submit" name="cidade"><img class="city" src="./img/caracteristicas/city.svg" /></button>
            <button id="floresta" type="submit" name="floresta"><img class="flores" src="./img/caracteristicas/floresta.svg" /></button>
            <button id="geleira" type="submit" name="geleira"><img class="gel" src="./img/caracteristicas/iceberg.svg" /></button>
            <button id="historico" type="submit" name="historico"><img class="hist" src="./img/caracteristicas/museu.svg" /></button>
            <button id="montanha" type="submit" name="montanha"><img class="mont" src="./img/caracteristicas/montanha.svg" /></button>
            <button id="praia" type="submit" name="praia"><img class="pra" src="./img/caracteristicas/praia.svg" /></button>
          </div>
        </div>
      </div>
</div>

     <div class="modal-container" id="modal_container">
      <form action="telas.php" method="get" class="modal" >
        <img id="kombi" src="./img/kombi.gif" alt="">
        <h1>Países</h1>
        <h1>selecionados</h1>
        
        <input id="iniciar" type="submit" value="Iniciar">
        <a id="fechar" href="principal.php" style="color: black;">Escolher novamente</a>
        <input class="escolha" type="text" name="escolha" id="escolha" style="display: none;">
</form> 

  </div>
  </main>

  

  

  <footer class="footer">
    <p>KMLY - 2021 ©</p>
  </footer>

  <!-- main.js -->
  <script src="main.js"></script>

  

</body>

</html>