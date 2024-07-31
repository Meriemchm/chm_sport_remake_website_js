<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">  
	<title>Clubsportive</title>

<body>
	<header>
		<h1 class="logo"><span>Club</span>sportive</h1>
		<div class="menuToggle" onclick="toggleMenu();"></div>
		<ul class="navbar">
			<li><a href="#banniere" onclick="toggleMenu();">&#9751 Accueil</a></li>
			<li><a href="#slider-page" onclick="toggleMenu();">&#9871 A propos</a></li>
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
			<h2>Clubsportive</h2>
			<p>Rejoinez nous pour des activites sportive .</p>
		</div>
	</section>

	<section class="slider-page" id="slider-page">

		<button class="pre-btn"><img src="images/arrow.png" alt=""></button>
        <button class="nxt-btn"><img src="images/arrow.png" alt=""></button>
        <div class="card-container">
			<div class="card">
				
					<img src="./images/natation.jpg" alt="1">
				
				<div class="content">
					<div class="title">Natation</div>
					<div class="btn2">
						<button><a href="natation.html" >more</a></button>
					</div>
				</div>
			</div>

			<div class="card">
			
					<img src="./images/foot.jpg" alt="2">
				
				<div class="content">
					<div class="title">Football</div>
					<div class="btn2">
						<button><a href="football.html" >more</a></button>
					</div>
				</div>
			</div>
			<div class="card">
	
					<img src="./images/judo.jpg" alt="3">
			
				<div class="content">
					<div class="title">Judo</div>

					<div class="btn2">
						<button><a href="judo.html" >more</a></button>
					</div>
				</div>
			</div>

			<div class="card">
				
					<img src="./images/escrime.jpg" alt="4">
				
				<div class="content">
					<div class="title">Escrime</div>
					<div class="btn2">
						<button><a href="escrime.html" >more</a></button>
					</div>
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