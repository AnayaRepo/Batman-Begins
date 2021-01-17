class Umbrella{
    constructor(x, y, width, height){
        var options={
            isStatic: true
            //friction: 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/walking_1.png");
  
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        // this.body.setCollider("circle",120,0,300);
        // this.body.debug =  true;
        pop();
    }
}