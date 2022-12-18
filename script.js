let result =document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//fetch weather data from API using arrow function
let getWeather =() =>{
    let cityValue = cityRef.value;
    if(cityValue.length == 0){
        result.innerHTML = `<h3> Please enter a city</h3>`;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
        fetch (url) 
            .then ((resp)=>resp.json())
            //IF CITY NAME IS VALID
            .then (data => {
                result.innerHTML = `<h2>${data.name}</h2>
                <h4 class="weather"> ${data.weather[0].main}
                <h4 class="desc"> ${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                <h1>${data.main.temp}&#176;</h1>
                <div class="temp-container">
                    <div>
                        <h4 class="title">Min</h4>
                        <h4 class="temp"> ${data.main.temp_min}</h4>
                        <h4 class="title">Max</h4>
                        <h4 class="temp"> ${data.main.temp_max}</h4>
                    </div>
                </div>`;
            })
            .catch (() => {
                result.innerHTML = `<h3> City not found</h3>`;
            });
    }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load",getWeather);
