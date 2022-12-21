let nPelotas = 80;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(00);
  for(let i = 0; i < nPelotas; i ++){
    pelotas[i] = new RandomWalker(i);

  }
  

}

function draw() {
  for (let i = 0; i < nPelotas; i ++){
    pelotas[i].update();
    pelotas[i].display();
  
  }
  
}


// ---------------------------------
// ----------- Classes -------------
// ---------------------------------


// --------- Random Walker ---------
class RandomWalker{
  constructor(_name) {
    this.red = random(0, 228);
    this.green = random(100, 88);
    this.blue = random(100, 143);

    this.t = 30;
    this.tSpeed = random(0.3);
    this.noiseShift = random(20,20);

    this.pos = createVector(width/2, height/2);
    this.speed = createVector(random(-15, 15),random(-15, 15));
    this.diametro = random(7, 20);
    print('hola soy la pelota' + this.name);

  }
  update(_t) {
    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -0.10, -0.10));
    this.pos.add(this.speed);

    this.t += this.tSpeed;

  }
  display(){
    stroke("rgba(0,0,0,.2)");
    strokeWeight(3);
    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro); 
  }
}
