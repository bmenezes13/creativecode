//resourses for all code used were found within p5js.org
function setup() {
  //webgl for 3D object purposes
  createCanvas(1920, 1080, WEBGL);
}

function draw() {
  //black bg
  background(0);
  //lighting effect for sine spheres
  ambientLight(50);
  directionalLight(0, 255, 60, 0.25, 0.25, 0);
  pointLight(0, 0, 255, width/2, height/2, 250);
  //yellow stroked sphere
  push();
  noFill();
  stroke(255,255,0);
  strokeWeight(4);
  //rotation on x-axis
  rotateX(frameCount * 0.01);
  sphere(500,6,3);
  pop();
  //purple stroked sphere
  push();
  noFill();
  stroke(130,0,130);
  strokeWeight(4);
  //rotation on y-axis
  rotateY(frameCount * 0.01);
  sphere(700, 6,3);
  pop();
  //rotation for collection of sin spinning spheres
  rotateY(frameCount * 0.01);
  //loop for different sin values
  for (let j = 0; j < 5; j++) {
    push();
    //loop for forward/backward translation
    for (let i = 0; i < 80; i++) {
      //translation of sine spinning spheres
      //sourced from https://p5js.org/examples/3d-sine-cosine-in-3d.html
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );
      //rotation along z-axis
      rotateZ(frameCount * 0.002);
      //lighting colored sine spheres
      push();
      //white stroke
      stroke(255, 255, 255);
      strokeWeight(1);
      //uses lighting values
      specularMaterial(100);
      sphere(18, 6, 4);
      pop();
    }
    pop();
  }
}
