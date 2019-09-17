const  appKey = "501859519a7e0d160d90e4719d76e3c6";
let searchInput ,cityName ,  icon, temperature ,humidity, searchButton;

function mainFunction() {  
searchButton = document.getElementById("search-btn");
searchInput = document.getElementById("search-txt");
cityName = document.getElementById("city-name");
icon = document.getElementById("icon");
temperature = document.getElementById("temp");
humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);
  getTodaysWeather(searchValue);
}

$(mainFunction)

function enterPressed(event) {
 ne;
  padding-right:1px;
  padding-left:1px;
  text-align:center;
}

.search {
  position: absolute;
  left: 50%;
  top:50%;
  -webkit-transform:translate(-50%,-50%);
          transform:translate(-50%,-50%);
}*/ if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function cToF(celsius){
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
    return cToFahr;
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  }
  else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(cToF(jsonObject.main.temp - 273)) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
}

