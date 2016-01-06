define(['jquery'],function($) {

	// KiwiJS

	// Variables

	var i = 0;
	var gallery_array = [];
	var gallery_text;
	var adventure_dir;
	var adventure_name;
	var adventure_text;
	//Media tag
	var adventure_MT;


	// Page functionalities

	$("#content_cover").on('click', function(e) {

		if (e.target !== this){
			event.stopPropagation();
			$("#active_image").focus();
	    }else{
	    	$("#content_cover").css("display", "none");
	    }
	});

	// Functions

	function show_gallery(adventure_dir, gallery_array, adventure_name, adventure_text){

		$("#content_cover").css("display", "block");

		$("#active_image").html('<img src="'+ adventure_dir + gallery_array[0] +'" class="loader" alt="Kiwiblog_'+ adventure_name +'_'+ 0 +'">');

		s_gallery_array = gallery_array;
		i = 0;

		$("#img_info").html('<div id="img_no"></div>');
		$("#img_no").html("<p>"+(i+1)+"/"+(gallery_array.length)+"</p>");
		$("#img_info").append('<span id="gallery_text">'+adventure_text+'</span>');
	}

	// Angular functionalities

	var app = angular.module("kiwiApp", []);

	app.controller('KiwiController', ['$scope', function($scope) {

		$scope.adventures = [
			{
				name: 	"Auckland",
				image: 	"photos/Thumbnails/Auckland_city_tn.jpg",
				dir: 	"photos/Auckland/",
				text: 	"Photos from places throughout Auckland, mostly the parks located close to where I lived. I spend quite a lot of time in the parks, either just enjoying the amazing surroundings, or for running. Compared to Denmark, Auckland wasn't my favorite place to go running, since there's like no flat stretches, all inclines. Also a few pictures from the apartment.",
				MT: 	1 
			},
			{
				name: 	"Rangitoto",
				image: 	"photos/Thumbnails/Rantitogo_tn.jpg",
				dir: 	"photos/Rangitoto/",
				text: 	"Rangitoto is a small volcanic island just outside the coast of Auckland. It was the first place I went hiking after arriving, and it was quite the scenic view walking around the island. The whole island was covered with these black Lava rocks but there was still a lot of vegetation as well. There's also a few photos from the neighbouring island, Motutapu Island.",
				MT: 	1
			},
			{
				name: 	"Wainamu",
				image: 	"photos/Thumbnails/Wainamu_tn.jpg",
				dir: 	"photos/Wainamu/",
				text: 	"We traveled to the northern part of the North Island (‘Te Ika-a-Māui’), to visit this small lake in beautiful surroundings. As seen on the photos there’s this large sand dune right next to it. The sand was very soft against your feet but also rather hot, because of the burning sun. Running or sliding down the sides on boards seemed like a common and fun activity.",
				MT: 	1
			},
			{
				name: 	"Waitakere",
				image: 	"photos/Thumbnails/Waitakere_tn.jpg",
				dir: 	"photos/Waitakere/",
				text: 	"Waitakere is a beach next to the Wainamu lake. It was the first beach outside of Auckland I got to visit, and the first time I tried the waters around NZ. As a pale ‘cold-blooded’ Dane it was most pleasant to cool down a bit, especially considering I hadn’t really gotten use to the big change in climate yet at this point. This was approximately 2 weeks after arrival.",
				MT: 	1
			},
			{
				name: 	"Mt. Taranaki",
				image: 	"photos/Thumbnails/Mt_Taranaki_tn.jpg",
				dir: 	"photos/Taranaki/",
				text:   "For somewhat obvious reasons I’ve never tried climbing a mountain before. So this trip to Mount Taranaki aka Mount Egmont, was a first for me. It was a very exciting and a bit tough trip, climbing up the mountain to a little lodge near the top. We stayed overnight there, and got to see the amazing sunrise the following day, before climbing back down.",
				MT: 	1 
			},
			{
				name: 	"Waiheke",
				image: 	"photos/Thumbnails/Waiheke_tn.jpg",
				dir:    "photos/Waiheke/",
				text:   "Waiheke is another island off the coast of Auckland, it is way bigger than Rangitoto and is also populated. The island is known for its wine production and some amazing beaches, as shown in some of the photos. As some of the photos shows, a lot of people living in and around Auckland owns a boat.",
				MT: 	1 
			},
			{
				name: 	"Hillary Trail",
				image: 	"photos/Thumbnails/Hilary_trail_tn.jpg",
				dir:    "photos/Hillary/",
				text: 	"The Hillary Trail is a hiking trail on the western part of the North Island (hiking is kinda the thing in NZ). I, together with other students, went on a 4 days long hiking trip along this trail. This was an amazing experience for me. It was the first time I tried hiking, and with a trail that meanders through an astounding landscape, I realised why people would travel this far to try it.",
				MT: 	1 
			},
			{
				name: 	"Bay of Islands",
				image: 	"photos/Thumbnails/Bay_of_islands_tn.jpg",
				dir:    "photos/Bay_of_islands/",
				text: 	"Most places in New Zealand got two names, an original Maori name and an “English name”. The naming process for their English names seems to follow one simple rule; “keep it simple”. So as the name states, this is in fact a bay with a lot of islands. It was an amazing place though, we rented kayaks and paddled around some of the island and did some snorkeling and cliff jumping.",
				MT: 	1  
			},
			{
				name: 	"South Island",
				image: 	"photos/Thumbnails/South_island_tn.jpg",
				dir:    "photos/South_island/",
				text: 	"For the semester break, a group of friends and I went on a two week trip, to the south Island, in a campervan. The South Island is considered “the real New Zealand” by many, since that’s where you’ll find the most incredible sceneries. Also it’s one of the few places in the world where it’s possible to go to the beach for sunbathing and climb a gletcher on the same day.",
				MT: 	1 
			},
			{
				name: 	"Mt. Ngauruhoe",
				image: 	"photos/Thumbnails/Ngauruhoe_tn.jpg",
				dir:    "photos/Ngauruhoe/",
				text: 	"Mount Ngauruhoe is one of the few bigger mountains on the North Island. The tallest peak is also better known as ‘Mount Doom’, since it’s that mountain, which is used in the Lord of the Rings movies. We went up there a bit late, and even though we got quite a few warnings from the local kiwis traversing the mountain pass, we carried on and got an amazing experience out of it.",
				MT: 	1 
			},
			{
				name: 	"Hobbiton",
				image: 	"photos/Thumbnails/Hobbiton_tn.jpg",
				dir:    "photos/Hobbiton/",
				text: 	"This is where it gets a bit nerdy to say the least. This gallery is all photos from my trip to ‘Hobbiton’, which is the home of the hobbits from the Lord of the Rings trilogy and The Hobbit trilogy. Peter Jackson (the producer of all 6 movies) chose to leave the movie set behind after finishing filming as an additional tourist attraction for people traveling through ‘Middle-earth’.",
				MT: 	1 
			},
			{
				name: 	"Random",
				image: 	"photos/Thumbnails/Random_tn.jpg",
				dir:    "photos/Other/",
				text: 	"This is a small compilation of random pictures from all the other adventures. Some which needs a bit of explanation: Hands down, the best burger I’ve ever had. A garden which had a “cup tree”... I guess? Some Maori culture. The struggle of having a Danish name. And finally also a picture that pretty much describes how I spent my time flying back and forth (It was a looong flight).",
				MT: 	1 
			},
			/* {
				name: 	"(Vidoer)",
				image: 	"photos/Thumbnails/Videos_tn.jpg",
				dir:    "photos/videos/",
				text: 	"This is a compilation of various small video clips I recorded. All recorded during one of the other adventures you’ve seen in the other galleries shown on the site. They’re mainly recorded and posted here to give a more in the scene feeling than what the images are giving. The recording quality of both sound and video ain’t impressive, I know.",
				MT: 	2
			} */
		];

		$scope.loadGallery = function() {

			adventure_dir 	= this.adventure.dir;
			adventure_name 	= this.adventure.name;
			gallery_array 	= [];
			adventure_text  = this.adventure.text;
			adventure_MT		= this.adventure.MT;

			if (adventure_MT == 1) {
				$.ajax({
					type: "GET",
				  url : adventure_dir,
				  success: function(data){
			      $(data).find("a:contains(.JPG),a:contains(.jpg)").each(function(){
			        gallery_array.push($(this).attr("href"));
			      });
			      show_gallery(adventure_dir, gallery_array, adventure_name, adventure_text);
				  }
				});
			};

			if (adventure_MT == 2) {
				$.ajax({
					type: "GET",
				  url	: adventure_dir,
				  success: function(data){
				    $(data).find("a:contains(.mp4)").each(function(){
				      gallery_array.push($(this).attr("href"));
				    });
				    show_video_gallery(adventure_dir, gallery_array, adventure_name, adventure_text);
				  }
				});
			};
			
		};

		$scope.imagenav = function(e) {

			n = gallery_array.length;
			k = e.which;

			if (e == 39 || e == 37) {
				k = e;
			};

			if(k==39||k==37){
				i= k==39? ++i: --i;
			}
			if (i>n-1){
				i=0;
			};
			if (i<0) {
				i=n-1;
			};

			$("#img_no").html("<p>"+(i+1)+"/"+(n)+"</p>");

			if (k==39||k==37) {
				$("#active_image").fadeOut( 100, function() {
					$("<img src="+adventure_dir + gallery_array[i]+">").ready(function() {
						$("#active_image").html('<img src="'+ adventure_dir + gallery_array[i] +'" alt="Kiwiblog_'+ adventure_name +'_'+ i +'">').fadeIn(100);;
					})
				});
			};

			$("#active_image").focus();
		};

	}]);

	angular.element(document).ready(function() {
  	angular.bootstrap(document, ['kiwiApp']);
	});
	
});