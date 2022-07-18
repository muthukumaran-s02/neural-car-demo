console.log('Hellow world!');
const gameworld = document.getElementById('world');
const ctx = gameworld.getContext('2d');
const car = new Car(100, 500, 30, 60, 'blue', gameworld);

function load() {
  gameworld.height = window.innerHeight - 300;
  gameworld.width = 400;
  car.draw(ctx);
  animate();
}

function animate() {
  car.update();
  car.draw(ctx);
  requestAnimationFrame(animate);
}
