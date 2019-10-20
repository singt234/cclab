// let key = 'dbd2144cd831b95572796231ddf3f706';
// let api = '';

let weather = '';
let loc = 'Brooklyn,New York';

function setup() {
  noCanvas();
  background(220);
  let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + loc + '&APPID=dbd2144cd831b95572796231ddf3f706';
  loadJSON(encodeURI(weatherApi), gotWeatherData);
}

function gotWeatherData(data) {
  weather = data.weather[0].description;
  console.log("Weather: " + weather);
  let gifApi = 'https://api.giphy.com/v1/gifs/search?api_key=pIJreHJ37qTS6QSg8Zs6v83KAu6D7tEe&q=' + weather + '&limit=25&offset=0&rating=G&lang=en';
  loadJSON(encodeURI(gifApi), gotGIFData);
}

function gotGIFData(giphy) {
  console.log(giphy.data[0].images.original.url);
  createImg(giphy.data[3].images.original.url);
}
