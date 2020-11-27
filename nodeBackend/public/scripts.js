//button variable
const geoButton = document.querySelector('.geo-button');
geoButton.addEventListener('click', getLocation);
//check for geolocation availability
//harvist that data

function getLocation(){

if("geolocation" in navigator){
    console.log("geolocation is available");

    navigator.geolocation.getCurrentPosition(position =>{
        const lat = position.coords.latitude; 
        const long = position.coords.longitude;

        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent =long;
    });
}


 else {
    console.log("geolocation is not available");
}

}

//comment