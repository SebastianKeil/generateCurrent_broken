class Electrodes{
  constructor(){
  }
  
  applyForceTo(electrons){
    //print("volt: " + volt.value());
    for(let e of electrons){
        var force = createVector(10,0);
        e.applyForce(force);
      }
  }
  
  show(){
    noStroke();
    fill(80, 80, 250, 70);
    rect(width/7-100, height/4-35, 65, 350,20);
    fill(250, 80, 80, 70);
    rect(width/7+525, height/4-35, 65, 350,20);
  }
  charge(n, electrons){
    for(let i = 0; i < n; i++){
      electrons.push(new Electron(width/7-34, height/2 + random(-250,-50)));
    }
  }
}