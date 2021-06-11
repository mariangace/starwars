/** @type {HTMLCanvasElement} */

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = './assets/jawa.png';
    this.speed = Math.random() * 2 + 1;
    this.spriteWidth = 32;
    this.spriteHeight = 48;
    this.spriteRow = 1;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height + 200 - this.height);
    this.frame = 0; // for sprites
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); //every enemy will show a different velocity
    this.angle = Math.random() * 2;
    this.angelSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 5; // to change de prominent curve of the angle
  }
  update() {
    this.x -= this.speed;
    //this.x += Math.random() * 5 - 2.5;
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angelSpeed;
    if (this.x + this.width < 0) this.x = canvas.width;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 2 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      this.spriteHeight * this.spriteRow,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
