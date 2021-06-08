class Chain{

constructor(ba,bb){

var options = {
    bodyA:ba,
    bodyB:bb,
    stiffness:0.05,
    length:10
}

this.chain = Constraint.create(options);
World.add(world,this.chain);
}

display(){
    var pos = this.chain.bodyA.position;
    var pos1 = this.chain.bodyB.position;
    strokeWeight(4);
    line(pos.x,pos.y,pos1.x,pos1.y);
}

}