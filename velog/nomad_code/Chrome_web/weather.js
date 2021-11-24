const API_KEY = "b3901f4db8f339495bfb558819b7ed00";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(x => x.json())
        .then(y=>{
            const weather= document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = y.weather[0].main;
            city.innerText = y.name;
        });
}

function onGeoError() {
    alert("님 어디세요?");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)