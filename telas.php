<?php
require_once 'conecta.php';

session_start();

if(!isset($_SESSION['logado'])):
	header('Location: login.php');
endif;

          
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="imagem/svg" href="./img/mundo.svg" />
    <title>Modal</title>
</head>

<!--STYLES-->
<link rel="stylesheet" href="telas.css" />

<!-- Fonts -->

<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&family=Poppins:wght@300;400;500&display=swap"
    rel="stylesheet" />

</head>

<body>

    <main>
        
    <div class="modal-container">
    <div class="card">
  <div class="products">

            <?php
            $escolha= $_GET['escolha'];
           

            $categoria = "SELECT * FROM referencia WHERE Id_categoria = '$escolha'";
            $getpaisesquery = mysqli_query($conexao,$categoria);
            $row = mysqli_num_rows($getpaisesquery);
            
                while($getpaisesfiltrados = mysqli_fetch_array($getpaisesquery)){
                    $paises = $getpaisesfiltrados['Id_pais'];
                    // echo "<center>$paises</center>";

                    // Aparecer caracteristicas

                    $sql = "SELECT * FROM pais WHERE Id_pais = '$paises'";
                    $sth = $conexao->query($sql);
                    $result=mysqli_fetch_array($sth);
                    // echo $result['text1'];
                    ?>


    <div class="product" product-id="1">
    <div class="thumbnail">
      <?php   echo '<img class="imgcarac" style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img1'] ).'"/>'; ?>
      </div class="description">
 <h1> <?php echo $result['text1']; ?></h1>

    </div>

    <div class="product " product-id="2" >
      <div class="thumbnail">
      <?php   echo '<img class="imgcarac" style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img2'] ).'"/>'; ?>
      </div>
      <h1 class="description"> <?php echo $result['text2']; ?></h1>
    </div>

    <div class="product" product-id="3">
    <div class="thumbnail">
      <?php   echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img3'] ).'"/>'; ?>
      </div>
      <h1 class="description"> <?php echo $result['text3']; ?></h1>
    </div>

    <div class="product" product-id="4" >
    <div class="thumbnail">
      <?php   echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img4'] ).'"/>'; ?>
      </div>
      <h1 class="description"> <?php echo $result['text4']; ?></h1>
    </div>

    <div class="product" product-id="5" >
    <div class="thumbnail">
      <?php   echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img5'] ).'"/>'; ?>
      </div>
      <h1 class="description"> <?php echo $result['text5']; ?></h1>
    </div>
    
  
  
                 

<?php
                }
            
           ?>

</div>
<div class="opi">
              <button id="coracao"><img class="core" src="./img/coracao.png" /></button>
            <button id="dislike"><img class="like" src="./img/dislike.png" /></button>
        </div>
        <div class="pular">
            <a id="prev" ripple="" class="btn"><img class="dire" src="./img/esquerda.png" /></a>
            <button id="proximo">Próximo país</button>
            <a id="next" ripple="" class="btn"><img class="esquer" src="./img/direita.png" /></a>
        </div> 
              </div>


    </main>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="./telas.js"></script>
</body>

</html>