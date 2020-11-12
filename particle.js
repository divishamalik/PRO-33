class Particle{
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic:false
            
        }
        this.body=Bodies.circle(x,y,5,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.radius=5;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //rotate(this.body.angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,10,10);
        pop();
    }
}