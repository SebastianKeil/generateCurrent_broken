class Atom{
  
  constructor(x, y){
    this.anker = createVector(x, y);
    this.pos = createVector(x, y);
    this.charge = 0;
    this.col = color(250, 80, 80);
  }
  
  show(){
    noStroke();
    fill(red(this.col), green(this.col), blue(this.col), 50);
    circle(this.pos.x, this.pos.y, 70);
    fill(this.col);
    circle(this.pos.x, this.pos.y, 20);
    stroke(100);
    if(this.charge > 10){
      strokeWeight(2);
      noFill();
      circle(this.pos.x, this.pos.y, 70);
    }
  } 
  
  applyForceTo(electrons){
    for(let e of electrons){
      var force = p5.Vector.sub(this.pos, e.pos);
      if(force.mag() < 40 && force.mag() > 10){
        e.applyForce(force);
      }
    }
  }
  
  checkCharge(){
    this.charge = 0;
    for(let e of electrons){
      if(dist(this.pos.x, this.pos.y, e.pos.x, e.pos.y) < 35){
        this.charge++;
      }
    }
    let r = map(this.charge, 0, 11, 250, 80);
    let g = map(this.charge, 0, 11, 80, 250);
    this.col = color(r, g, 50);
  }
  
  move(){
    this.pos.mult(0).add(this.anker);
    let heat = map(temp.value(), 20, 400, 0, 5);
    let move_y = random(- heat, heat);
    let move_x = random(- heat, heat);
    this.pos.add(createVector(move_x, move_y));
  }
  
  
  
  
}