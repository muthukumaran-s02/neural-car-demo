class MotionAccelerator {
  constructor(
    acceleration,
    backAcceleration,
    maxSpeed,
    friction,
    zeroThreshold
  ) {
    this.speed = 0;
    this.acceleration = acceleration;
    this.backAcceleration = backAcceleration;
    this.maxSpeed = maxSpeed;
    this.friction = friction;
    this.zeroThreshold = zeroThreshold;
  }

  update(direction) {
    if (direction > 0) {
      this.speed += this.acceleration;
    } else if (direction < 0) {
      this.speed -= this.backAcceleration;
    }
  }
  tick() {
    if (Math.abs(this.speed) < this.zeroThreshold) {
      this.speed = 0;
      return;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed) {
      this.speed = -this.maxSpeed;
    }
  }
}
