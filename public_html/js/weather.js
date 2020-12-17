const forcastCount = 3; /*replace with loop */
var fourDay = [];
var weekdayList = new Array();
weekdayList.push.apply(weekdayList, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]);

var monthList = new Array();
monthList.push.apply(monthList, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);

const bodyClasses = document.body.classList;
var lat = "20.5083";
var lon = "-86.9458";

var requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=ee95bdb22401d075cd5b22ae078a154f&exclude=minutely,hourly`;

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then((jsObject) => {
        console.log(jsObject);
        let i=0
        while (fourDay.length < forcastCount+1) {
            // if(jsObject.daily[i].dt_txt.includes("18:00:00")) {
                fourDay.push(jsObject.daily[i]);
            // }
            i++;
        }
        const fourDayContainer = document.querySelector('#weather-forecast');
        const alertContainer = document.querySelector("#weatherAlert");

        if(jsObject["alerts"] != null) {
            var weatherAlerts = jsObject["alerts"];
            weatherAlerts.forEach(weatherAlert => {
                alertContainer.querySelector('.alert-message').innerHTML += weatherAlert.event + "<br/>";  
            });
            document.querySelector(".weatherAlertX").addEventListener("click",function(){
                alertContainer.style = "display: none;";
            });            
        } else {
            alertContainer.style = "display: none";
        }     
        console.log(fourDay);
        console.log(weatherAlerts);        

    



    fourDay.forEach(forecastDay =>{
        // console.log(forecastDay);
        let dayContainer = document.createElement("div");
        dayContainer.classList.add("forecast-day");
        fourDayContainer.appendChild(dayContainer);
        thedate = new Date(forecastDay.dt * 1000);
        let dayWeekday = document.createElement("div");
        dayWeekday.classList.add("day-of-week")
        dayWeekday.textContent = weekdayList[thedate.getDay()];

        let theMonth = monthList[thedate.getMonth()];

        let theDate = thedate.getDate()
        let theYear = thedate.getFullYear()
        let dateContainer = document.createElement("div");
        dateContainer.classList.add("forecast-date");
        dateContainer.textContent =theMonth+" ";
        dateContainer.textContent +=theDate+", ";
        dateContainer.textContent +=theYear;


        let imageIcon = document.createElement("img");
        imageIcon.src = `https://openweathermap.org/img/w/${forecastDay.weather[0].icon}.png`;
        imageIcon.alt = forecastDay.weather[0].description;

        let weatherType = document.createElement("p");
        weatherType.innerHTML = forecastDay.weather[0].description;      

        let dayTempLabel = document.createElement("p");
        dayTempLabel.textContent = "Temp: "
        let dayTemp = document.createElement("p")
        dayTemp.innerHTML = forecastDay.temp.day + "&deg;F";
        
        let dayHumidityLabel = document.createElement("p");
        dayHumidityLabel.textContent = "Humidity: "
        let dayHumidity = document.createElement("p")
        dayHumidity.innerHTML = forecastDay.humidity + "%";


        dayContainer.appendChild(dayWeekday);
        dayContainer.appendChild(dateContainer);
        
        weatherType.classList.add("weather");
        dayContainer.appendChild(weatherType);  
        imageIcon.classList.add("weather-icon")
        dayContainer.appendChild(imageIcon);
        dayTempLabel.classList.add("temp-label")              
        dayContainer.appendChild(dayTempLabel);
        dayTemp.classList.add("dayTemp")
        dayContainer.appendChild(dayTemp);

        dayHumidityLabel.classList.add("humidity-label")              
        dayContainer.appendChild(dayHumidityLabel);
        dayHumidity.classList.add("dayHumidity")
        dayContainer.appendChild(dayHumidity);       
    }); 
});





