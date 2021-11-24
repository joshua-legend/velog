# Geolocation

* navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
* https://openweathermap.org/


```javascript
const API_KEY = "b3901f4db8f339495bfb558819b7ed00";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    //promise의 개념으로 비동기 프로그래밍이다.
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weather= document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
}

function onGeoError() {alert("님 어디세요?");}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
```