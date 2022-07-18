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
        }
    }


    slapAttack() {
        this.world.slap.pause();
        this.world.slap.currentTime = 0;
        this.world.slap.play();
        this.world.coolDownSlap = true;
        this.world.holdSlapAttack = true;
        this.offsetRight = 50;
        this.offsetLeft = 50;
    };


    youLose() {
        this.playDeadAnimation(IMAGES.CHARACTER.DEAD);
        if (!this.gameOver) {
            setTimeout(() => {
                this.loseNotification();
            }, 1000);
        }
    }


    loseNotification() {
        this.gameOver = true;
        document.getElementById('loose').classList.remove('dNone')
        world.character.world.bossFight.pause()
        world.character.world.lose_sound.play()
        pauseGame();
    }


    checkDamage() {
        if (this.isHurt()) {
            this.playAnimation(IMAGES.CHARACTER.HURT)
        }
    }


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


    swimRight() {
        this.moveRight();
        this.otherDirection = false;
        this.world.swim_sound.play();
    }


    swimLeft() {
        this.moveLeft();
        this.otherDirection = true;
        this.world.swim_sound.play();
    }


    swimUp() {
        this.moveUp();
        this.world.swim_sound.play();
    }


    swimDown() {
        this.moveDown();
        this.world.swim_sound.play();
    }


    checkSpeedUp() {
        if (this.shiftLeftKeyPressed()) {// Speed up the Character
            this.speed = 8;
        }
        if (!this.shiftLeftKeyPressed()) {// Normal speed 
            this.speed = 4;
        }
    }


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
