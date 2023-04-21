// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYW5nYSIsImEiOiJjbGdxbWk4a2EwZmtuM3Ntczl6c3NrOWl5In0.q5hoAME72bwjEBkaOnAhEw'

let latitude=10.003305330780108, longitude=76.33702040942886

var map = new mapboxgl.Map({


    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 16
})

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);
