class MovableObject extends DrawableObject {
    speed = 1;
    speedY = 0;
    speedX = 0;
    otherDirection = false;
    position = 400;
    energy = 5;
    coinAmount = 0;
    poison = 0;
    dead = false;
    acceleration = -1;
    pressure = 9;
    lastCollect = 0;
    lastHit = 0;
    offsetRight = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetTop = 0;
    paused = true;
    gameOver = false;

    /**
     * Change the direction of the object.
     * @param {Array} ctx - All informations about the object.
     */
    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 1);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }


    /**
     * Change the direction of the object back.
     * @param {Array} ctx 
     */
    flipImageBack(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }


    /**
     * 
     * @param {Array} mo - All informations about the object.
     * @returns - Gives back the information about position x and y, the height and width and the left, right, top and bottom offset of the object.
     */
    isColliding(mo) {
        return this.x + this.width - this.offsetRight > mo.x + mo.offsetLeft && this.y + this.height - this.offsetBottom > mo.y + mo.offsetTop && this.x + this.offsetLeft < mo.x + mo.width - mo.offsetRight && this.y + this.offsetTop < mo.y + mo.height - mo.offsetBottom
    }

    /**
     * Game physics - simulates the air in the bubble.
     */
    applyAir() {
        if (!pause) {
            setInterval(() => {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }, 1000 / 25);
        }
    }

    /**
     * Game physics - simulates th pressure under water.
     */
    applyPressure() {
        setInterval(() => {
            this.x += this.speedX;
            this.x -= this.pressure;
        }, 1000 / 25);
    }

    /**
     * The energy increases by one, but it never increases above 5.
     */
    collectHeart() {
        this.energy++;
        if (this.energy >= 5) {
            this.energy = 5;
        }
    }


    /**
     * Energy decreases by one, but never decreases below 0.
     */
    hit() {
        this.energy--;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * Stores the time from the last hit.
     * @returns - Check time between hurt and last hit.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.75;
    }


    /**
     * Dead if the energy is 0.
     * @returns - Queries whether the energy is 0.
     */
    isDead() {
        return this.energy <= 0;
    }


    /**
     * Coin increases by one, but never increases below 0.
     */
    collectCoin() {
        this.coinAmount++;
        if (this.coinAmount >= 5) {
            this.coinAmount = 5;
        }
    }

    /**
     * Coin decreases by one, but never decreases below 0.
     */
    loseCoin() {
        if (this.coinAmount > 0) {
            this.coinAmount--;
        }
    }

    /**
     * Poison increases by one, but never increases below 0.
     */
    collectPoison() {
        this.poison++
        if (this.poison >= 5) {
            this.poison = 5;
        }
    }

    /**
     * Poison decreases by one, but never decreases below 0.
     */
    losePoison() {
        if (this.poison > 0) {
            this.poison--
        }
    }

    /**
     * Object moves left at specified speed.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Object moves right at specified speed.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Object moves up at specified speed.
     */
    moveUp() {
        this.y -= this.speed;
    }

    /**
     * Object moves down at specified speed.
     */
    moveDown() {
        this.y += this.speed;

    }

    /**
     * Plays recurring animations.
     * @param {Array} images - Images for animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentImage++;
    }

    /**
     * Plays the dead animation.
     * @param {Array} images - Images for animation.
     */
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

    /**
     * Plays the bubble shot animation.
     * @param {Array} images - Images for animation.
     */
    playBubbleAnimation(images) {
        let i = this.currentBubbleImage % images.length;
        if (i == images.length) {
            this.firstImage = true;
            this.currentBubbleImage = 0;
        }
        if (i > 0 && this.firstImage == true) {
            this.currentBubbleImage = 0;
            this.firstImage = false;
        }
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentBubbleImage++;
    }

    /**
     * Plays the Slap Animation.
     * @param {Array} images - Images for animation.
     */
    playSlapAnimation(images) {
        let i = this.currentSlapImage % images.length;
        if (i == images.length) {
            this.firstImage = true
            this.currentSlapImage = 0
        }
        if (i > 0 && this.firstImage == true) {
            this.currentSlapImage = 0
            this.firstImage = false;
        }
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentSlapImage++;
    }

    /**
     * Checks that no key is pressed.
     * @returns - The keys W, A, S, D, arrow up, arrow left, arrow down and arrow right are not pressed.
     */
    noKeyPressed() {
        return this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false && this.world.keyboard.UP == false && this.world.keyboard.DOWN == false;
    }

    /**
     * Checks if a key is pressed.
     * @returns - The keys W, A, S, D, arrow up, arrow left, arrow down or arrow right are pressed.
     */
    anyKeyPressed() {
        return this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true || this.world.keyboard.UP == true || this.world.keyboard.DOWN == true;
    }

    /**
     * Checks if A or arrow left keys are pressed.
     * @returns - The A or arrow left keys are pressed.
     */
    leftKeyPressed() {
        return this.world.keyboard.LEFT == true;

    }

    /**
     * Checks if D or arrow right keys are pressed.
     * @returns - The D or arrow right keys are pressed.
     */
    rightKeyPressed() {
        return this.world.keyboard.RIGHT == true;

    }

    /**
     * Checks if S or arrow down keys are pressed.
     * @returns - The S or arrow down keys are pressed.
     */
    downKeyPressed() {
        return this.world.keyboard.DOWN == true;
    }

    /**
     * Checks if W or arrow up keys are pressed.
     * @returns - The W or arrow up keys are pressed.
     */
    upKeyPressed() {
        return this.world.keyboard.UP == true;
    }

    /**
     * Checks if C key is pressed.
     * @returns - The C key is pressed.
     */
    cKeyPressed() {
        return this.world.keyboard.C == true;
    }

    /**
     * Checks if shift left key is pressed.
     * @returns - The shift left key is pressed.
     */
    shiftLeftKeyPressed() {
        return this.world.keyboard.ShiftLeft == true;
    }

    /**
     * Checks if space key is pressed.
     * @returns  - The space key is pressed.
     */
    spaceKeyPressed() {
        return this.world.keyboard.SPACE == true;
    }

    /**
     * Status bar, coin bar, poison bar and final boss status bar updated.
     * @param {Array} images - the bar image for statusbar, coinbar, poisonbar and endboss-statusbar.
     */
    playBarAnimation(images) {
        this.img = this.imageCatch[images];
    }

    /**
     * Checks the level of energy and shows the right status bar.
     * @param {array} life - The bar graph for status bars.
     */
    lifeBar(life) {
        if (this.energy == 5) {
            this.playBarAnimation(life[5]);
        }

        if (this.energy == 4) {
            this.playBarAnimation(life[4]);
        }

        if (this.energy == 3) {
            this.playBarAnimation(life[3]);
        }

        if (this.energy == 2) {
            this.playBarAnimation(life[2]);
        }

        if (this.energy == 1) {
            this.playBarAnimation(life[1]);
        }

        if (this.energy == 0) {
            this.playBarAnimation(life[0]);
        }
    }

    /**
     * Checks the amount of coins and shows the right coin bar.
     * @param {Array} coin - The bar graph for coin bars.
     */
    coinBar(coin) {
        if (this.coinAmount >= 5) {
            this.playBarAnimation(coin[5]);
        }

        if (this.coinAmount == 4) {
            this.playBarAnimation(coin[4]);
        }

        if (this.coinAmount == 3) {
            this.playBarAnimation(coin[3]);
        }

        if (this.coinAmount == 2) {
            this.playBarAnimation(coin[2]);
        }

        if (this.coinAmount == 1) {
            this.playBarAnimation(coin[1]);
        }

        if (this.coinAmount == 0) {
            this.playBarAnimation(coin[0]);
        }
    }

    /**
     * Checks the amount of poison and shows the right coin bar.
     * @param {Array} poisonImg - The bar graph for poison bars.
     */
    poisonBar(poisonImg) {
        if (this.poison >= 5) {
            this.playBarAnimation(poisonImg[5]);
        }

        if (this.poison == 4) {
            this.playBarAnimation(poisonImg[4]);
        }

        if (this.poison == 3) {
            this.playBarAnimation(poisonImg[3]);
        }

        if (this.poison == 2) {
            this.playBarAnimation(poisonImg[2]);
        }

        if (this.poison == 1) {
            this.playBarAnimation(poisonImg[1]);
        }

        if (this.poison == 0) {
            this.playBarAnimation(poisonImg[0]);
        }
    }
}