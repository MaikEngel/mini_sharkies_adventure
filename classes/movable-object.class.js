class MovableObject {
    x = 120;
    y = 250;
    speed = 1;
    img;
    height = 100;
    width = 150;
    imageCatch = {}
    currentImage = 0;
    otherDirection = false;
    position = 400;



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Enemy || this instanceof StandingEnemy || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.height, this.width)
            ctx.stroke();
        }
    }

    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 1);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    flipImageBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image()
            img.src = path;
            this.imageCatch[path] = img;
        });
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;

    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;

    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentImage++;
    }

    noKeyPressed() {
        return this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false && this.world.keyboard.UP == false && this.world.keyboard.DOWN == false;
    }

    anyKeyPressed() {
        return this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true || this.world.keyboard.UP == true || this.world.keyboard.DOWN == true;
    }

    leftKeyPressed() {
        return this.world.keyboard.LEFT == true;

    }

    rightKeyPressed() {
        return this.world.keyboard.RIGHT == true;

    }

    downKeyPressed() {
        return this.world.keyboard.DOWN == true;
    }

    upKeyPressed() {
        return this.world.keyboard.UP == true;
    }

    cKeyPressed() {
        return this.world.keyboard.C == true;
    }

    shiftLeftKeyPressed() {
        return this.world.keyboard.ShiftLeft == true;
    }

    spaceKeyPressed() {
        return this.world.keyboard.SPACE == true;
    }
}