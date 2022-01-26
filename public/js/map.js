let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("speedlinelocationmap"), {
    center: { lat: 40.620136753924506, lng: -74.76209664425815 },
    zoom: 18,
    mapTypeId: "hybrid",
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
  });

}
