// let key = 'dbd2144cd831b95572796231ddf3f706';
// let api = '';

let input, button, display;

function setup() {
  noCanvas();
  background(220);
  // input = createInput();
  // input.position(20, 65);

  // button = createButton('submit');
  // button.position(input.x + input.width, 65);
  // button.mousePressed(value);

  // display = createElement('h2', 'Which hero you like?');
  // display.position(20, 5);

  // textAlign(CENTER);
  // textSize(50);

  let heroApi = 'https://superheroapi.com/api/2345681102221763/search/ironman';
  loadJSON(encodeURI(heroApi), gotheroData);

}
// function value() {
//   const charactnarer = input.value();
//   input.value('');
// }
function gotheroData(hero) {
  console.log(hero.results[0].image.url);
  createImg(hero.results[0].image.url);
}
