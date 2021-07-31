class Link{
    constructor(A,B){

console.log("Link"+A.body);

        var lastRope=A.bodies.length-2
        console.log("LastRope"+lastRope);
        var options={
            bodyA:A.bodies[lastRope],
            pointA:{x:0,y:0},
            bodyB:B,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01,
        }

        this.connection=Constraint.create(options);
        World.add(world,this.connection);

        

    }

    detach(){
       World.remove(world,this.connection) 
    }
}