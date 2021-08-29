class Stone{
    constructor(x,y,w,h){
        var options={
            restitution: 0.02,
            density:0.01
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
 
    }
    display(){
        push();
        stroke(2);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, this.body.position.w, this.body.position.h);
        pop();
    }
}