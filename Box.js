class Box{
    constructor(x,y,width,height){
     var  options = {
isStatic: true
    }
     this.body = Bodies.rectangle(x, y,width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("sprites/Bin.png")
      
      World.add(world, this.body);
}
display(){
    var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
      strokeWeight(3);
      stroke("white");
      fill(30,12,256);
      image(this.image,0, 0, this.width,this.height);
      pop();
    }
}