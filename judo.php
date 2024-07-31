<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="judo.css">
	<title>Clubsportive | Judo</title>

<body>
	<header>
		<h1 class="logo"><span>Club</span>sportive</h1>
		<div class="menuToggle" onclick="toggleMenu();"></div>
		<ul class="navbar">
			<li><a href="#info" onclick="toggleMenu();">&#9751 Accueil</a></li>
			<li><a href="index.php" onclick="toggleMenu();">&#9871 A propos</a></li>
			<li><a href="mailto:fs@gmail.com" onclick="toggleMenu();">&#9742 Contact</a></li>
			<?php
			session_start();
			$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8;', 'root' ,'');
			if(isset($_GET['id']) AND $_GET['id'] > 0)
			{
			$getid = intval($_GET['id']);
			$requser = $bdd->prepare('SELECT * from users where id = ?');
			$requser->execute(array($getid));
			$userinfo = $requser->fetch();?>
			<li><p style=" margin-left: 20px; width:100%;" ><span style="font-size: 1.2em; color:#2a4963;">Username : </span><?php echo $userinfo['pseudo'] ;?> <a class="btn-sign" style="margin-left:40px; color:white;" href="deconnexion.php">se deconnecter</a></p>
						<?php }else{ ?>
			<a href="inscription.php" id="sign" class="btn-sign" onclick="toggleMenu();">signup / login</a><?php } ?></li>
			

		</ul>
	</header>

	<section class="banniere" id="banniere">
		<div class="contenu">
			<h2>Judo</h2>
			<p>Amusez vous dans votre sport favoris</p>
		</div>
	</section>

	<section class="main" id="info">

        <div class="content">
            <div class="card">
                <div class="left">
           
			<div class="left-container">
                    <h2>Judo 2022</h2>
					<div class="line"></div>
            <p>Ici vous trouverez votre emploie du temps </p>
		<a onclick="toggleMenu();" class="btn-card" href="/wp-content/uploads.pdf" target="_blank" >horaire et coûts</a>	
                </div>

				<div class="left-container">
                    <h2>Reglement</h2>
					<div class="line"></div>
            <p>Voyez lire le Reglement et respecter les consignes </p>
		<a onclick="toggleMenu();" class="btn-card-two" href="reglement.txt" download="Reglement-ClubSportive" target="_blank" >Reglement</a>	
                </div>
				
			</div>

                <div  class="right">
                    <img src="./images/judo3.jpg" alt="">
                </div>
            </div>

            <div class="card">
                <div class="left">
        <div class="left-container">
                    <h2  class="titre-texte "> <span>TENUE</span>/ÉQUIPEMENT OBLIGATOIRE EN Judo</h2>
                    <p> À commander auprès de l’intervenant au premier cours : </p>
					<ul>
						<li>Ensemble Judo.</li>
						<li>Protection Judo.</li>	
					</ul>
				</div>
				<div class="left-container">		
		<h2>POSSIBILITÉ DE PASSAGE DE GRADES</h2> 
        <p>Information auprès de l’intervenant (affiliation nécessaire auprès de l’organisme qui régit le passage de grade).</p>
	    </div>
                </div>
                <div  class="right">
                    <img src="./images/judo1.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
	

	<section class="page-media" id="page-media">
		<div class="titre">
			<h2 class="titre-texte">Nos <span>Multi</span>media</h2>
			<p>Les moments partager avec les autres. </p>
		</div>
		<div class="contenu">
			<div class="box">
				<div class="imbox">
					<img src="./images/equipe1.jpg" alt="">
				</div>
			</div>
			<div class="box">
				<div class="imbox">
					<img src="./images/equipe2.jpg" alt="">
				</div>
			</div>
			<div class="box">
				<div class="imbox">
					<img src="./images/equipe3.jpg" alt="">
				</div>

			</div>
			<div class="box">
				<div class="imbox">
					<img src="./images/equipe4.jpg" alt="">
				</div>
			</div>
			<div class="box">
				<div class="imbox">
					<img src="./images/equipe5.jpg" alt="">
				</div>
			</div>

	</section>

	<footer>
		
		<div class="colonnes">
			<div class="colonne">
			  <h3>Relations clients</h3>
			  <p>Relations Investisseurs</p>
			  <p>Modes de lecture</p>
			  <p>Mentions légales</p>
			</div>
			<div class="colonne">
			  <h3>FAQ</h3>
			  <p>Recrutement</p>
			  <p>Conditions d'utilisation</p>
			  <p><a href="mailto:fs@gmail.com">Nous contacter</a></p>
			</div>
			<div  class="colonne">
			  <h3>Compte</h3>
			  <p><a href="sign.html">S'enregistrer</a></p>
			  <p><a href="log.html">Se connecter</a></p>
			  <p><a href="mailto:fs@gmail.com">Nous contacter</a></p>
			</div>
		  </div>
	
	<div class="footer-bottom">
		<div class="social">
			<ul class="socials">
				<li><a href="#"><i><img src="./images/facebook.png" alt="1"></i></a></li>
				<li><a href="#"><i><img src="./images/twitter.png" alt="2"></i></a></li>
				<li><a href="#"><i><img src="./images/linkedin.png" alt="1"></i></a></li>
				<li><a href="#"><i><img src="./images/reddit.png" alt="1"></i></a></li>
			</ul>
		</div>
		<p>copyright &copy; <a href="#">ChamiBouhali</a> </p>
	</div>
</footer>

	<script src="index.js"> </script>
</body>

</html>