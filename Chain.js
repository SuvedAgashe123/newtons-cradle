class Chain{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 300
        }
        this.chain = Constraint.create(options);
        this.pointA=pointA
        World.add(world, this.chain);
    }

    display(){
        var pointA=this.pointA
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}