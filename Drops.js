class Drops{
    constructor(x, y, r){
      var options={
          isStatic: false,
          friction: 0.1
      }
      this.body = Bodies.circle(x, y, r, options);
      this.x = x;
      this.y = y;
      this.r = r;

      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("#004280");
        translate(0, 0);
        circle(pos.x, pos.y, this.r);
        ellipseMode(RADIUS);
        pop();
    }
    update(){
        var pos = this.body.position;
        if(pos.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }
}