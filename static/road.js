const MARKER = 10;
const TILE_MARKER_HEIGHT = 50;

class Road {
  constructor(x, world, laneCount = 3, laneWidth = 60) {
    this.x = x;
    this.world = world;
    this.laneCount = laneCount;
    this.laneWidth = laneWidth;
  }

  draw(ctx) {
    ctx.fillStyle = 'darkGrey';
    ctx.fillRect(0, 0, this.world.width, this.world.height);

    //Road Borders
    ctx.fillStyle = 'White';
    ctx.fillRect(0, 0, MARKER, this.world.height);
    ctx.fillRect(this.world.width - MARKER, 0, MARKER, this.world.height);

    //Lanes
    this.laneCount = Math.floor(this.world.width / this.laneWidth);

    for (var i = 0; i < this.laneCount; i++) {
      
    }
  }
}
