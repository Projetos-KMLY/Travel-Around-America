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
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&family=Poppins:wght@300;400;500&display=swap"
    rel="stylesheet" />

</head>

<body>

    <main>
        <div class="modal-container" id="modal_container">
            <div id="paises">

            </div>
            <div id="curiosidade">

            </div>
            <div id="foto">

            </div>
            <div class="modal">

            <!-- FILTRO PAISES -->
            <?php
            $escolha= $_GET['escolha'];
           

            $categoria = "SELECT * FROM referencia WHERE Id_categoria = '$escolha'";
            $getpaisesquery = mysqli_query($conexao,$categoria);
            $row = mysqli_num_rows($getpaisesquery);
            
                while($getpaisesfiltrados = mysqli_fetch_array($getpaisesquery)){
                    $paises = $getpaisesfiltrados['Id_pais'];
                    echo "<center>$paises</center>";

                    // Aparecer caracteristicas

                    $sql = "SELECT * FROM pais WHERE Id_pais = '$paises'";
                    $sth = $conexao->query($sql);
                    $result=mysqli_fetch_array($sth);

                    echo $result['text1'];

                    echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img1'] ).'"/>';

                    echo $result['text2'];

                    echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img2'] ).'"/>';

                    echo $result['text3'];

                    echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img3'] ).'"/>';

                    echo $result['text4'];

                    echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img4'] ).'"/>';

                    echo $result['text5'];

                    echo '<img style="width:128px;height:128px" src="data:image/jpeg;base64,'.base64_encode( $result['img5'] ).'"/>';
                
                }
            ?>
           
                <div class="opi">
              <button id="coracao"><img class="core" src="./img/coracao.png" /></button>
            <button id="dislike"><img class="like" src="./img/dislike.png" /></button>
        </div>
        <div class="pular">
            <button id="esquerda"><img class="dire" src="./img/esquerda.png" /></button>
            <button id="proximo">Próximo país</button>
            <button id="direita"><img class="esquer" src="./img/direita.png" /></button>
        </div>
            </div>
            </div>
    </main>

</body>

</html>