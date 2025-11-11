let mover;

function setup() {
  createCanvas(640, 240);
  mover = new Mover();
  createP("Click mouse to apply wind force.");
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind;
    if (mouseX > width / 2) {
      wind = createVector(-0.1, 0);
    } else {
      wind = createVector(0.1, 0);
    }
    mover.applyForce(wind);
  }

  mover.update();
  mover.show();
  mover.checkEdges();

  let friction = mover.velocity.copy();
  friction.mult(-1);
  friction.normalize();
  friction.mult(0.05);
  mover.applyForce(friction);

  let wind = createVector(map(noise(frameCount*0.01),0,1,-0.2,0.2),0);
  mover.applyForce(wind);

}
