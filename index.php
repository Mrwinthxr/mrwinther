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
				<div id="div_brand" class="col-md-3">
					<a id="a_brand" href="#">Mads R Winther</a>
				</div>
				<div class="col-md-7">
				</div>
				<div id="div_ext_links" class="col-md-2">
					<a class="a_ext_links" href="https://dk.linkedin.com/in/mads-rossing-winther-44a767a8">
						<img id="img_linkedIn" src="images/icons/In-White-34px-R.png">
					</a>
					<a class="a_ext_links" href="https://github.com/Mrwinthxr">
						<img id="img_linkedIn" src="images/icons/GitHub-Mark-Light-32px.png">
					</a>
				</div>
			</div>
	</header>

	<div class="main0 container">

		<div id="content">

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

	</div>

	<div class="main1 container">

	</div>

	<canvas id="planet_canvas" class="fluid-container" width="1650" height="950">

	</canvas>

	<footer class="container">
		
	</footer>

	<script data-main="js/app/MRW_gateway" src="js/lib/requirejs.min.js"></script>
	<script type="text/javascript">require(['MRW_main'],function(){})</script>

	<?php include_once("analyticstracking.php") ?>
	
</body>
</html>