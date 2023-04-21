// Initializing Mapbox
mapboxgl.accessToken = ''

let latitude=, longitude=

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


