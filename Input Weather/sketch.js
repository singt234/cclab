// Giphy variables---------------------
let giphySearch = 'sad';
let giphyapi = 'https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=';
let giphyLimit = '&limit=25&offset=0&rating=G&lang=en';
let giphyLink;
let input;

// Weather variables---------------------
let city = ' ';
let weatherKey = '&APPID=5f7315f331181aa4ac6571d7f18b543a';
let weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=';
let weatherlink = weatherapi + city + weatherKey;
let weatherData;

function setup() {
  loadJSON(weatherlink, gotweatherData);

  input = createInput('Enter city here');
  let button = createButton('Submit');
  // button.position(20, 100);
  button.mousePressed(updateCity);
}

function updateCity() {
  console.log(input.value());
  city = input.value();
  weatherlink = weatherapi + city + weatherKey;
  loadJSON(weatherlink, gotweatherData);
}
function gotweatherData(data) {
  weatherdata = (data.weather[0].main);
  giphySearch = weatherData;

  giphyLink = giphyapi + weatherdata + giphyLimit;
  loadJSON(giphyLink, gotgiphyData);

}

function gotgiphyData(giphyData) {
  console.log(giphyData.data[1].images.original.url);
  createImg(giphyData.data[1].images.original.url);
}