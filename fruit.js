class Fruit {
  constructor(x, y, r) {
    var fruit_options = {
      isStatic: false,
    };

    this.fruit = Bodies.circle(x, y, r, fruit_options);
    World.add(world, this.fruit);

    this.x = x;
    this.y = y;
    this.r = r;
  }

  Display() {
    push();
    translate(this.fruit.position.x, this.fruit.position.y);
   // rotate(this.fruit.angle);
    ellipseMode(CENTER);
    ellipse(0,0,this.r);
    pop();
  }
}
