console.log('Loading app');
const gameworld = document.getElementById('world');
const ctx = gameworld.getContext('2d');
const world = new World(gameworld);
const road = new Road(0, gameworld, 4);
const car = new Car(100, 500, 30, 60, 'blue', gameworld, road);

function load() {
  gameworld.height = window.innerHeight - 200;
  gameworld.width = 400;
  car.draw(ctx);
  animate();
}

function animate() {
  car.update();
  world.draw(ctx);
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}
