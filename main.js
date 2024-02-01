let latitude=28.6261397, longitude=77.1360251;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 3
});   
map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);


var img1=document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
	element:img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var img2=document.querySelector("#gateway")
var marker1=new mapboxgl.Marker({
	element:img2
})
.setLngLat([72.8345791,18.9221870])
.addTo(map)

var img3=document.querySelector("#gate")
var marker1=new mapboxgl.Marker({
	element:img3
})
.setLngLat([77.2298149,28.6126351])
.addTo(map)

var img4=document.querySelector("#lotus")
var marker1=new mapboxgl.Marker({
	element:img4
})
.setLngLat([77.2587405,28.5535767])
.addTo(map)

var img5=document.querySelector("#victoria")
var marker1=new mapboxgl.Marker({
	element:img5
})
.setLngLat([88.3425885,22.5451790])
.addTo(map)

map.addControl(
	new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl
	})
	);
