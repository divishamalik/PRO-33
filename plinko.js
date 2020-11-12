class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
            
        }
        this.body=Bodies.circle(x,y,7,options);
        this.radius=7;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,14,14);
        pop();
    }
}