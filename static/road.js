const MARKER = 10;
const TILE_MARKER_HEIGHT = 100;

class Road {
  constructor(x, world, laneCount = 3, laneWidth = 60) {
    this.x = x;
    this.y = 0;
    this.world = world;
    this.laneCount = laneCount;
    this.laneWidth = laneWidth;
  }

  update(y) {
    this.y += y;
  }

  draw(ctx) {
    ctx.fillStyle = 'darkGrey';
    ctx.fillRect(0, 0, this.world.width, this.world.height);

    //Road Borders
    ctx.fillStyle = 'White';
    ctx.fillRect(MARKER, 0, MARKER, this.world.height);
    ctx.fillRect(this.world.width - 2 * MARKER, 0, MARKER, this.world.height);

    //Lanes
    //this.laneCount = Math.floor(this.world.width / (this.laneWidth + MARKER));
    this.laneWidth = Math.floor(
      (this.world.width - 4 * MARKER) / this.laneCount
    );

    var offSet = this.y % TILE_MARKER_HEIGHT;

    for (var i = 1; i < this.laneCount; i++) {
      ctx.fillStyle = 'White';
      for (
        var j = offSet - TILE_MARKER_HEIGHT;
        j <= this.world.height;
        j += TILE_MARKER_HEIGHT
      ) {
        ctx.fillRect(
          i * (this.laneWidth + MARKER),
          j,
          MARKER,
          TILE_MARKER_HEIGHT / 2
        );
      }
    }
  }
}
