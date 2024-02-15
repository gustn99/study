function onGeoOk(position) {
  const lat = position.coord.latitude;
  const lng = position.coord.longitude;

  
}

function onGeoErr() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);