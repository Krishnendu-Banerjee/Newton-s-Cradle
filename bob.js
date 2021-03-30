class Bob{
    constructor(x, y, radius){
        var options={
            isStatic: false,
            Restitution:0.9,
            friction:0.5,
            density:1.2,
        }

        this.body= Bodies.circle(x, y, radius, options)
        this.radius=radius
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}