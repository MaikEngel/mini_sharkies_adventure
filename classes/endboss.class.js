class Endboss extends MovableObject {
    world;
    height = 500;
    width = 600;
    y = -120;
    speed = 15;
    offsetRight = 30;
    offsetBottom = 50;
    offsetLeft = 50;
    offsetTop = 250;
    hurt = false;
    attack = false;
    bossSpawned = false;
    i = 0;


    constructor() {
        super().loadImage(IMAGES.ENDBOSS.SPAWN[0]);
        this.loadImages(IMAGES.ENDBOSS.IDLE);
        this.loadImages(IMAGES.ENDBOSS.SPAWN);
        this.loadImages(IMAGES.ENDBOSS.HURT);
        this.loadImages(IMAGES.ENDBOSS.ATTACK);
        this.loadImages(IMAGES.ENDBOSS.DEAD)
        this.x = 2000;
        setTimeout(() => {
            this.animate()
        }, 1500);
    }


    animate() {
        setInterval(() => {
            if (!pause) {
                if (this.isDead()) {
                    this.youWin();
                }
                else {
                    this.checkEndbossDamage();
                    this.checkEndbossAttack();
                    this.endbossSpawn();
                    this.checkEndbossIdle();
                }
            }
        }, 150);


        setInterval(() => {
            this.endbossAttackTimer()
        }, 3000 + Math.random() * 1000);
    }


    youWin() {
        this.playDeadAnimation(IMAGES.ENDBOSS.DEAD);
        if (!this.gameOver) {
            setTimeout(() => {
                this.winNotification()
            }, 1000);
        }
    }


    winNotification() {
        this.gameOver = true;
        document.getElementById('win').classList.remove('dNone')
        world.endboss.world.bossFight.pause()
        world.endboss.world.win_sound.play()
        pauseGame();
    }


    checkEndbossDamage() {
        if (this.isHurt()) {
            this.hurt = true;
            this.playAnimation(IMAGES.ENDBOSS.HURT)
            if (this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            setTimeout(() => {
                this.hurt = false;
            }, 2000);
        }
    }


    checkEndbossAttack() {
        if (this.attack == true && this.hurt == false) {
            this.playAnimation(IMAGES.ENDBOSS.ATTACK);
            if (this.x > this.world.level.level_start_x) {
                this.moveLeft();
                setTimeout(() => {
                    this.attack = false;
                }, 3000);
            }
        }
    }


    endbossSpawn() {
        if (this.i < 10 && this.bossSpawned == true && this.attack == false) {
            this.playAnimation(IMAGES.ENDBOSS.SPAWN)
            this.i++
            setTimeout(() => {
                this.world.invulnerableBoss
            }, 2000);
        }
    }


    checkEndbossIdle() {
        if (this.i >= 10 && this.bossSpawned == true && this.hurt == false && this.attack == false) {
            if (this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            this.playAnimation(IMAGES.ENDBOSS.IDLE)
        }
    }

    
    endbossAttackTimer() {
        if (this.i >= 10 && !pause) {
            this.attack = true
        }
    }
}
