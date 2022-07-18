class Car {
  constructor(x, y, width, height, color, world) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.controls = new Controls();
    this.world = world;
    this.speed = 0;
    this.acceleration = 2;
    this.backAcceleration = 1;
    this.friction = 0.5;
    this.maxSpeed = 10;
    this.angle = 0;
    this.color = color;
    this.speedAccelerator = new MotionAccelerator(2, 1, 10, 0.1, 1);
    this.angleAccelerator = new MotionAccelerator(0.04, 0.04, 1.8, 0.01, 0.02);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, world.width, world.height);
    // ctx.fillStyle = this.color;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angleAccelerator.speed);

    ctx.beginPath();
    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.fill();

    ctx.restore();
  }

  update() {
    if (this.controls.forward) {
      this.speedAccelerator.update(1);
    } else if (this.controls.backward) {
      this.speedAccelerator.update(-1);
    }
    this.speedAccelerator.tick();

    if (this.controls.left) {
      this.angleAccelerator.update(1);
    }
    if (this.controls.right) {
      this.angleAccelerator.update(-1);
    }
    if (!this.speedAccelerator.isZero()) {
      this.angleAccelerator.tick();
    }

    // console.log('Angle ' + this.angleAccelerator.speed);
    this.y -=
      this.speedAccelerator.speed * Math.cos(this.angleAccelerator.speed);
    this.x -=
      this.speedAccelerator.speed * Math.sin(this.angleAccelerator.speed);
  }

  updateAngle(direction) {}
}
