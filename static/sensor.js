class Sensor {
  constructor(world, car, rayCount, rayLength) {
    this.world = world;
    this.car = car;
    this.rayCount = rayCount;
    this.rayLength = rayLength;
    this.raySpread = Math.PI / rayCount;
    this.rays = [];
  }

  update() {}
}
