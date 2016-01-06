<!DOCTYPE html>

<html lang="en">
<head>

	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta name="description" content="Mads R Winther's Web Dev portofolio"/>

	<title>MRWinther</title>

	<link href='http://fonts.googleapis.com/css?family=Orbitron:400,900' rel='stylesheet' type='text/css'/>
	<link rel="icon" href="images/favicon.ico" type="image/x-icon"/>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="css/mrwcss.css"/>
</head>

<body>

	<header class="fluid-container">
			<div class="container">
				<a id="brand" href="#">
					Mads R Winther
				</a>
			</div>
	</header>

	<div class="main0 container">

		<p class="reading">This domain is mainly for testing and hosting projects. <br/> 
											 Some examples of completed projects shown below.</p>

		<h4>- Major Projects -</h4>
		<!--<img src="images/EWSlogo.png">-->
		<a href="http://elliottwavesurfer.com/">Elliottwavesurfer.com</a>
		<p class="reading">A commercial website which delivers stock- and currency analyses.</p> 

		<h4>- Minor Projects -</h4>
		<a href="http://mrwinther.dk/projects/KiwiBlog/">KiwiBlog</a>
		<p class="reading">A small project with AngularJS and own responsive grid system.</p>

	</div>

	<div class="main1 container">

	</div>

	<footer class="container">
		
	</footer>

	<script data-main="js/app/MRW_gateway" src="js/lib/requirejs.min.js"></script>
	<script type="text/javascript">require(['MRW_main'],function(){})</script>

	<?php include_once("analyticstracking.php") ?>
	
</body>
</html>