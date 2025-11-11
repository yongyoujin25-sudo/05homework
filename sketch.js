let moverA;
let moverB

function setup() {
  createCanvas(640, 240);
  moverA = new Mover(width / 2, 30,1);
  moverB = new Mover(100,100,10);
  createP("Click mouse to apply wind force.");
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  if (mouseIsPressed) {
    let wind;
    if (mouseX > width / 2) {
      wind = createVector(-0.1, 0);
    } else {
      wind = createVector(0.1, 0);
    }
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverA.show();
  moverA.checkEdges();

  moverA.update();
  moverA.show();
  moverA.checkEdges();

  let wind = createVector(map(noise(frameCount*0.01),0,1,-0.2,0.2),0);
  moverA.applyForce(wind);
  moverB.applyForce(wind);

}
