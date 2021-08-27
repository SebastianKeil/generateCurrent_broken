let electrons = [];
let atoms = [];
let electrodes;
let volt;
let temp;
let shooting = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //build the atom grid
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 5; j++){
      atoms.push(new Atom(width/7 + i*70, height/4 + j*70));
    }
  }
  
  //build the electrodes
  electrodes = new Electrodes();
  
  //start one electron
  electrons.push(new Electron(50, height/2 + random(-100, 100)));
}

//_/_/_/_/_/_/_/_/_/---DRAW---_/_/_/_/_/_/_/_/_/_/_/_/_/_/

function draw() {
  background(255);
  
  electrodes.applyForceTo(electrons);
  electrodes.show();
  
  //all atoms attract all electrons and show up
  for(let a of atoms){
    //a.checkCharge();
    a.applyForceTo(electrons);
    a.move();
    a.show();
  }
  
  //all electrons move and show up
  for(let i = 0; i < electrons.length; i++){
    electrons[i].move();
    electrons[i].show();
  }
  //not too many electrons at once
  //cleanElectrons();
  
  //print("amount electrons: " + electrons.length);
  
}

function cleanElectrons(){
  let max_elec_amount = map(volt.value(), 0, 10, 0, 400);
  if(electrons.length > max_elec_amount){
    electrons.splice(0, 1);
  }
}

function mousePressed(){
  if(mouseY < height/4 + 320 && mouseY > height/4 - 34){
    electrons.push(new Electron(mouseX, mouseY));
  }
}