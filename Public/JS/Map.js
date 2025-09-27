// Map_JS_Public

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // Style URL
    
    //  Generally in Map, we pass first [latitude, then longitude]
    
    // But,

    // in MapBox:- we pass first Starting position [longitude, then latitude].
    
    // This code work for new listings
    center: listing.geometry.coordinates,
    zoom: 9, // starting zoom
});

// Marker 1:- Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red"})
.setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
.setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h5>${listing.title}</h5><p>Exact Location will be provided after booking!</p>`
    )
)
.addTo(map);

// ......................................................................................................................