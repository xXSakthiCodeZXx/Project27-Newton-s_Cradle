class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness : 1,
            length : 100
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyA.position;
        
        strokeWeight(2);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointB.y;

        var Anchor2X = this.rope.bodyB.position.x+this.offsetX;
        var Anchor2Y = this.rope.bodyB.position.y+this.offsetY;

        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    
}