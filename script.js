window.addEventListener('load', ()=>{
    let long;
    let lat;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position => {
            const keyId = 'a1a5763c6ce3ed3ae0df7930f0d187b2';
            const lang = 'ru'
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${keyId}&lang=${lang}`;
            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                document.querySelector('.location__city').textContent = data.name;
                document.querySelector('.temperature__degree').innerHTML = Math.floor(data.main.temp - 273) + '&deg';
                document.querySelector('.location__icon').innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`
                document.querySelector('.temperature__descrip').innerHTML = data.weather[0].description;
            })
        });
    }else
    {
        h1.textContent = 'hey dis is not working bec ause resons'
    }
});