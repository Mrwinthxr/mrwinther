// Gateway for MRWinther

requirejs.config({
	baseUrl	: "/js",
	paths	: {
		'jquery'				: "lib/jquery.min",
		'bootstrap'			: "lib/bootstrap.min",
		'angular'				: "lib/angular.min",
		'angular-route'	: "lib/angular-route.min",
		'angularAMD'		: 'lib/angularAMD'
	},
	shim: {
		'angularAMD': ['angular'],
		'angular-route': ['angular']
	},
	
});