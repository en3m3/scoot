const forcastCount = 3; /*replace with loop */
var fourDay = [];
var weekdayList = new Array();
weekdayList.push.apply(weekdayList, ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]);

const bodyClasses = document.body.classList;
var locationID = "3530103";

var requestURL = `https://api.openweathermap.org/data/2.5/forecast?id=${locationID}&units=imperial&appid=ee95bdb22401d075cd5b22ae078a154f&exclude="minutely,hourly,alerts`
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then((jsObject) => {
        // console.log(jsObject);
        let i=0
        while (fourDay.length() < forcastCount+1) {
            if(jsObject.list[i].dt_txt.includes("18:00:00")) {
                fourDay.push(jsObject.list[i]);
            }
            console.log(i);
            i++;
        }
        console.log(fourDay);      
        });

    const fiveDayContainer = document.querySelector('.weather-forecast');

    fourDay.forEach(forcastDay =>{
        let dayContainer = document.createElement("div");
        dayContainer.classList.add("forcast-day");

        thedate = new Date(forcastDay.dt_txt);
        let dayWeekday = document.createElement("div");
        dayWeekday.classList.add("day-of-week")
        dayWeekday.textContent = weekdayList[thedate.getDay()];
        let imageIcon = document.createElement("img");
        imageIcon.src = `https://openweathermap.org/img/w/${forcastDay.weather[0].icon}.png`;
        imageIcon.alt = forcastDay.weather[0].description;

        let weatherType = document.createElement("p");
        weatherType.innerHTML = forcastDay.weather[0].description;      

        let dayTempLabel = document.createElement("p");
        dayTempLabel.textContent = "Temp: "
        let dayTemp = document.createElement("p")
        dayTemp.innerHTML = forcastDay.main.temp + "&deg;F";
        // fiveDayContainer.appendChild(dayContainer);
        // dayContainer.appendChild(dayWeekday);
        // dayContainer.appendChild(imageIcon);
        // dayContainer.appendChild(weatherType);        
        // dayContainer.appendChild(dayTempLabel);
        // dayContainer.appendChild(dayTemp);
    }); 





