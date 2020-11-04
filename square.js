class Square{
    constructor(x, y, w, h){
        var options = {
            restitution: 1, friction: 0.5, density: 0.5
        }
        this.body = Bodies.rectangle(x, y, w, h)
        World.add(world, this.body)
        this.w = w
        this.h = h
    }
    display(){
        var angle = this.body.angle
        translate(this.body.position.x, this.body.position.y)
        push()
        rotate(angle)
        rectMode(CENTER)
        fill("green")
        rect(0, 0, this.w, this.h)
        pop()
    }
}