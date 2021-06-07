  
class Balls {
    constructor(x,y,radius){
    var options={
    isStatic:false,
    'restiution':1,
    'friction':0,
    'density':7.8
}
     this.radius=radius;
    this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
}

    display(){
    push();
    ellipseMode(RADIUS);
    fill(255,0,255);  
    ellipse(this.body.position.x,this.body.position.y,this.radius)
    pop();
}}