class MovableObject extends DrawableObject {
    speed = 1;
    speedY = 0;
    speedX = 0;
    otherDirection = false;
    position = 400;
    energy = 100;
    coinAmount = 0;
    poison;
    dead = false;
    acceleration = -1;
    pressure = 9;
    lastCollect = 0;
    lastHit = 0;

    offsetRight = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetTop = 0;

    



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

    hit() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.75;
    }

    
    collectCoin() {
        this.coinAmount++;
        console.log(this.coinAmount)
    }

    collectPoison() {
        this.poison++
    }

    isDead() {
        return this.energy <= 0;
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

    playDeadAnimation(images) {
        let i = this.currentImage % images.length;
        if (i >= images.length - 1) {
            let path = images[images.length - 1];
            this.img = this.imageCatch[path];
            this.dead = true;
        } else {
            let path = images[i];
            this.img = this.imageCatch[path];
            this.currentImage++;
        }
    }

    playBarAnimation(images) {
        this.img = this.imageCatch[images];
    }

    isColliding(mo) {
        return this.x + this.width - this.offsetRight > mo.x + mo.offsetLeft && this.y + this.height - this.offsetBottom > mo.y + mo.offsetTop && this.x + this.offsetLeft < mo.x + mo.width -mo.offsetRight && this.y + this.offsetTop < mo.y + mo.height -mo.offsetBottom
    }


    applyAir() {
        setInterval(() => {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000 / 25);
    }

    applyPressure() {
        setInterval(() => {
            this.x += this.speedX;
            this.x -= this.pressure;
        }, 1000 / 25);
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

    lifeBar(life) {
        if (this.energy == 100) {
            this.playBarAnimation(life[5]);
        }

        if (this.energy == 80) {
            this.playBarAnimation(life[4]);
        }

        if (this.energy == 60) {
            this.playBarAnimation(life[3]);
        }

        if (this.energy == 40) {
            this.playBarAnimation(life[2]);
        }

        if (this.energy == 20) {
            this.playBarAnimation(life[1]);
        }

        if (this.energy == 0) {
            this.playBarAnimation(life[0]);
        }
    }

    coinBar(coin) {
        if (this.coinAmount >= 5) {
            this.playBarAnimation(coin[5]);
            console.log('5', this.coinAmount)
        }

        if (this.coinAmount == 4) {
            this.playBarAnimation(coin[4]);
            console.log('4',this.coinAmount)
        }

        if (this.coinAmount == 3) {
            this.playBarAnimation(coin[3]);
            console.log('3',this.coinAmount)
        }

        if (this.coinAmount == 2) {
            this.playBarAnimation(coin[2]);
            console.log('2',this.coinAmount)
        }

        if (this.coinAmount == 1) {
            this.playBarAnimation(coin[1]);
            console.log('1',this.coinAmount)
        }

        if (this.coinAmount == 0) {
            this.playBarAnimation(coin[0]);
            console.log('0',this.coinAmount)
        }
    }
}