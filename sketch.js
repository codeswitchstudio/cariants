// video source: https://vimeo.com/90312869
let img;
// let vid;
let angle = 0;
// let hey;

function setup() {
//   createCanvas(800, 800, WEBGL);
//   graphics = createGraphics(200, 200)
  
//   hey = createGraphics(300, 100)
//   hey.fill(255)
//   hey.textAlign(CENTER);
//   hey.text('hey', 150, 50)
   

function resizeCanvas () {
  resizeCanvas(windowWidth, windowHeight);
}

 var cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  // cnv.position(windowWidth/2 - 400, 0);
  cnv.position(0,0);
  cnv.style('z-index', '-1');
  
  
  img = loadImage('assets/covTest.png');
  // vid = createVideo(['assets/360video_256crop_v2.mp4']);
  // vid.elt.muted = true;
  // vid.loop();
  // vid.hide();
}

function draw() {
  
  // graphics.fill(255, 0, 255)
  // graphics.ellipse(mouseX, mouseY, 20);
  // ambientLight(100);
  // directionalLight(255, 255, 255, 0, 0, 1);
  
  background("#E5E5E5");
  
  
//    //grid
//   stroke(0, 0, 0, 10);
//   strokeWeight(0.15)
//   for(var x=0; x <= width; x+=20) {
//     for(var y=0; y <= height; y+=20)  {
//     line(x, 0, x, height);
//     line(0, y, width, y);      }
//   }

//   background(255, 100, 0)
  noStroke()

  
  
  // translate(-200, -200)

// for (let i = 200; i < 800; i += 200) {

push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.5);
  box(50, 200, 9);
pop()
  
  translate(0, 0, 10)

  push()
  texture(img);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);
pop()
    
  translate(-100, 100)
  
    push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle  * 1.3);
  rotateY(angle);
  rotateZ(angle * 0.2);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle  * 1.3);
  rotateY(angle);
  rotateZ(angle * 0.2);
  plane(50, 200, 9);

  pop()
  
  translate(100, 100)
  
    push()   //lower
  noStroke()
  fill(210, 210, 197)
  // rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  // rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);

  pop()
  
   translate(100, 100) // bottom
      push()
  noStroke()
  fill(210, 210, 197)
  // rotateX(angle * 2);
  rotateY(angle * 0.01);
  rotateZ(angle);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  // rotateX(angle * 2);
  rotateY(angle * 0.01);
  rotateZ(angle);
  plane(50, 200, 9);

  pop()
  
  
     translate(-100, -400) // top2
      push()
  noStroke()
  fill(210, 210, 197)
  // rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  // rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);

  pop()
  
   
      translate(0, -200) //top
      push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);

  pop()
  
     translate(-50, 50)
      push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle * 4);
  rotateY(angle);
  rotateZ(angle);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle * 4);
  rotateY(angle);
  rotateZ(angle);
  plane(50, 200, 9);

  pop()
  
  //col2
  push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.5);
  box(50, 200, 9);
pop()
  
  translate(0, 0, 10)

  push()
  texture(img);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);
pop()
    
  translate(-100, 100)
  
    push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle  * 1.3);
  // rotateY(angle);
  rotateZ(angle * 0.2);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle  * 1.3);
  // rotateY(angle);
  rotateZ(angle * 0.2);
  plane(50, 200, 9);

  pop()
  
  translate(100, 100)
  
    push()   //lower
  noStroke()
  fill(210, 210, 197)
  rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);

  pop()
  
   translate(100, 100) // bottom
      push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle * 2);
  rotateY(angle * 0.03);
  rotateZ(angle);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle * 2);
  rotateY(angle * 0.03);
  rotateZ(angle);
  plane(50, 200, 9);

  pop()
  
  
     translate(-100, -400) // top2
      push()
  noStroke()
  fill(210, 210, 197)
  rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateX(angle * 2);
  rotateY(angle);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);

  pop()
  
   
      translate(0, -200) //top
      push()
  noStroke()
  fill(210, 210, 197)
  rotateY(angle * 2);
  rotateX(angle);
  rotateZ(angle * 0.5);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateY(angle * 2);
  rotateX(angle);
  rotateZ(angle * 0.5);
  plane(50, 200, 9);

  pop()
  
     translate(-50, 50)
      push()
  noStroke()
  fill(210, 210, 197)
  rotateZ(angle * 4);
  rotateY(angle);
  rotateX(angle);
  box(50, 200, 9);

  pop()
  
  translate(00, 0, 10)
  push()
  texture(img);
  rotateZ(angle * 4);
  rotateY(angle);
  rotateX(angle);
  plane(50, 200, 9);

  pop()
  
    angle += 0.02;
}
