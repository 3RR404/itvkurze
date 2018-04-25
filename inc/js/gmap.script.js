/*
 * Google Map API
 * It's api for showing the fullscreen map to the page contact
 * API for google map Place
 *
 * @since v1.0.0
 */
 var map;
 var infowindow;
 var mapId = 'gmap',
	 mapAPI = 'AIzaSyBgUmvckR5fokLg0BJmSuoJaivrwChu1u0';

   function initMap() {
	 var styledMapType = new google.maps.StyledMapType(
		 [
		   {
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#f5f5f5"
			   }
			 ]
		   },
		   {
			 "elementType": "labels.icon",
			 "stylers": [
			   {
				 "visibility": "off"
			   }
			 ]
		   },
		   {
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#616161"
			   }
			 ]
		   },
		   {
			 "elementType": "labels.text.stroke",
			 "stylers": [
			   {
				 "color": "#f5f5f5"
			   }
			 ]
		   },
		   {
			 "featureType": "administrative.land_parcel",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#bdbdbd"
			   }
			 ]
		   },
		   {
			 "featureType": "poi",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#eeeeee"
			   }
			 ]
		   },
		   {
			 "featureType": "poi",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#757575"
			   }
			 ]
		   },
		   {
			 "featureType": "poi.park",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#e5e5e5"
			   }
			 ]
		   },
		   {
			 "featureType": "poi.park",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#9e9e9e"
			   }
			 ]
		   },
		   {
			 "featureType": "road",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#ffffff"
			   }
			 ]
		   },
		   {
			 "featureType": "road.arterial",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#757575"
			   }
			 ]
		   },
		   {
			 "featureType": "road.highway",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#dadada"
			   }
			 ]
		   },
		   {
			 "featureType": "road.highway",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#616161"
			   }
			 ]
		   },
		   {
			 "featureType": "road.local",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#9e9e9e"
			   }
			 ]
		   },
		   {
			 "featureType": "transit.line",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#e5e5e5"
			   }
			 ]
		   },
		   {
			 "featureType": "transit.station",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#eeeeee"
			   }
			 ]
		   },
		   {
			 "featureType": "water",
			 "elementType": "geometry",
			 "stylers": [
			   {
				 "color": "#c9c9c9"
			   }
			 ]
		   },
		   {
			 "featureType": "water",
			 "elementType": "labels.text.fill",
			 "stylers": [
			   {
				 "color": "#9e9e9e"
			   }
			 ]
		   }
	   ],
		 {name: 'Styled Map'}
	 );

		/*
		var AdresseExample = {
			info: '<strong>Somewhere at the world</strong><br>\
						Example Street<br> 900 01 State<br> City<br>\
						<a href="enter the sharing link">Navigation</a>',
			lat: 48.644265,
			long: 20.521690
		};
		*/

		var myLocalization = {
			info: '<strong>Ján Michel</strong><br>\
						Janka Alexyho 11<br> 841 01 Bratislava - Dúbravka<br>\
						<a href="https://goo.gl/maps/FQwUdcKTQWm">Navigation</a>',
			lat: 48.184493,
			long: 17.046085
		};

		var locations = [
			[myLocalization.info, myLocalization.lat, myLocalization.long, 0],
		   //[AdresseExample.info, AdresseExample.lat, AdresseExample.long, 1], example
		 ];

		var map = new google.maps.Map(document.getElementById(mapId), {
			zoom: 10,
			scrollwheel: false,
			center: new google.maps.LatLng(48.184493, 17.046085),
			//mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
					'styled_map']
				}
		});

		var infowindow = new google.maps.InfoWindow({});

		var marker, i;

		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map
			});

			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					infowindow.setContent(locations[i][0]);
					infowindow.open(map, marker);
				}
			})(marker, i));
		}

		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');
   }
