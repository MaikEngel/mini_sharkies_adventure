class Character extends MovableObject {
    world;
    height = 200;
    width = 250;
    x = 20;
    y = 50;
    speed = 4;
    currentBubbleImage = 0;
    currentSlapImage = 0;
    firstImage = true;
    morePower = false
    offsetRight = 110;
    offsetBottom = 20;
    offsetLeft = 110;
    offsetTop = 100;

    /**
     * Create and initialize objects from the Character class.
     */
    constructor() {
        super().loadImage(IMAGES.CHARACTER.IDLE[0]);
        this.loadImages(IMAGES.CHARACTER.SWIMMING);
        this.loadImages(IMAGES.CHARACTER.IDLE);
        this.loadImages(IMAGES.CHARACTER.SLAP);
        this.loadImages(IMAGES.CHARACTER.BUBBLE);
        this.loadImages(IMAGES.CHARACTER.DEAD);
        this.loadImages(IMAGES.CHARACTER.HURT);
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (!pause) {
                if (this.isDead()) {
                    this.youLose();
                } else {
                    this.checkMoveStatus()
                }
            }
        }, 150);


        setInterval(() => {
            if (!pause) {
                if (!this.isDead()) {
                    this.checkDamage();
                    this.checkSpeedUp();
                    this.checkMoveDirection();
                    this.checkPowerUp();
                    this.world.camera_x = -this.x;
                }
            }
        }, 1000 / 60);
    }

    /**
     * Checks whether the character is standing, swimming or attacking.
     */
    checkMoveStatus() {
        if (this.anyKeyPressed()) {
            this.playAnimation(IMAGES.CHARACTER.SWIMMING);
        }
        if (this.noKeyPressed()) {
            this.playAnimation(IMAGES.CHARACTER.IDLE);
        }
        if (this.spaceKeyPressed() && !this.world.coolDownSlap || this.world.holdSlapAttack) {
            this.playSlapAnimation(IMAGES.CHARACTER.SLAP);
            this.slapAttack()
        }
        if (this.cKeyPressed() && !this.world.coolDownBubble && this.poison > 0 || this.world.holdbubbleAttack || this.world.bubbleAttack) {
            this.world.holdbubbleAttack = true;
            this.playBubbleAnimation(IMAGES.CHARACTER.BUBBLE);
            this.resetBubbleAttack();
        }
    }


    /**
     * Stops the playBubbleAnimation.
     */
    resetBubbleAttack() {
        setTimeout(() => {
            this.world.holdbubbleAttack = false
        }, 1100);
    }

    /**
     *Slap attack sound and range.
     */
    slapAttack() {
        this.world.slap.pause();
        this.world.slap.currentTime = 0;
        this.world.slap.play();
        this.world.coolDownSlap = true;
        this.world.holdSlapAttack = true;
        this.offsetRight = 50;
        this.offsetLeft = 50;
        this.resetSlapAttack();
    };

    /**
     * Reset the range of the character and activated a cool down for the slap.
     */
    resetSlapAttack() {
        setTimeout(() => {
            this.world.holdSlapAttack = false
            this.offsetRight = 110
            this.offsetLeft = 110;
            setTimeout(() => {
                this.world.coolDownSlap = false
            }, 500);
        }, 100);
    }

    /**
     * Starts the dead animation and shows the game over screen after one second.
     */
    youLose() {
        this.playDeadAnimation(IMAGES.CHARACTER.DEAD);
        if (!this.gameOver) {
            setTimeout(() => {
                this.loseNotification();
            }, 1000);
        }
    }

    /**
     * Shows game over screen, plays the lose sound and paused the game.
     */
    loseNotification() {
        this.gameOver = true;
        document.getElementById('loose').classList.remove('dNone')
        world.character.world.bossFight.pause()
        world.character.world.lose_sound.play()
        pauseGame();
    }

    /**
     * Checks if the character is hurt and plays the hurt animation.
     */
    checkDamage() {
        if (this.isHurt()) {
            this.playAnimation(IMAGES.CHARACTER.HURT)
        }
    }

    /**
     * Checks which direction the character is swimming.
     */
    checkMoveDirection() {
        if (this.rightKeyPressed() && this.x < this.world.level.level_end_x && !this.world.holdSlapAttack) {
            this.swimRight();
        }
        if (this.leftKeyPressed() && this.x > this.world.level.level_start_x && !this.world.holdSlapAttack) {
            this.swimLeft();
        }
        if (this.upKeyPressed() && this.y > -110 && !this.world.holdSlapAttack) {
            this.swimUp();
        }
        if (this.downKeyPressed() && this.y < 250 && !this.world.holdSlapAttack) {
            this.swimDown();
        }
    }


    /**
     * Character is moving and looking to the right and the swimming sound plays.
     */
    swimRight() {
        this.moveRight();
        this.otherDirection = false;
        this.world.swim_sound.play();
    }

    /**
     * Character is moving and looking to the left and the swimming sound plays.
     */
    swimLeft() {
        this.moveLeft();
        this.otherDirection = true;
        this.world.swim_sound.play();
    }

    /**
     * Character is moving up and the swimming sound plays.
     */
    swimUp() {
        this.moveUp();
        this.world.swim_sound.play();
    }

    /**
     * Character is moving down and the swimming sound plays.
     */
    swimDown() {
        this.moveDown();
        this.world.swim_sound.play();
    }


    /**
     * Speed Up the Character by pressing the left shift button.
     */
    checkSpeedUp() {
        if (this.shiftLeftKeyPressed()) {// Speed up the Character
            this.speed = 8;
        }
        if (!this.shiftLeftKeyPressed()) {// Normal speed 
            this.speed = 4;
        }
    }

    /**
     * Strengthened the Character by collecting 5 Coins.
     */
    checkPowerUp() {
        if (this.coinAmount == 5) {
            if (!this.morePower) {
                this.world.powerup_sound.play()
            }
            this.height = 250;
            this.width = 300;
            this.morePower = true;
        }

        if (this.coinAmount < 5) {
            this.height = 200;
            this.width = 250;
            this.morePower = false;
        }
    }

}
