class Ground {
  constructor(x, y, width, height) {
    var ground_options = {
      isStatic: true,
    };

    this.ground = Bodies.rectangle(x, y, width, height, ground_options);
    World.add(world, this.ground);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  Display() {
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}
