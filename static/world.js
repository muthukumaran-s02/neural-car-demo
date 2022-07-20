class World {
  constructor(canvas) {
    this.canvas = canvas;
  }
  draw(ctx) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
