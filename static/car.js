class Car {
  constructor(x, y, width, height, world) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.controls = new Controls();
    this.world = world;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, world.width, world.height);
    ctx.beginPath();
    ctx.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  }

  update() {
    if (this.controls.forward) {
      this.y -= 2;
    }
    if (this.controls.backward) {
      this.y += 2;
    }
    if (this.controls.left) {
      this.x -= 2;
    }
    if (this.controls.right) {
      this.x += 2;
    }
  }
}
