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


    IMAGES_SPAWN = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ]

    IMAGES_IDLE = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ]

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ]

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_SPAWN[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SPAWN);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD)
        this.x = 2000;
        setTimeout(() => {
            this.animate()
        }, 1500);

    }

    animate() {
        setInterval(() => {
            if (!pause) {
                if (this.isDead()) {
                    this.playDeadAnimation(this.IMAGES_DEAD);
                    this.world.dead = true;
                }
                else {
                    if (this.isHurt()) {
                        this.hurt = true;
                        this.playAnimation(this.IMAGES_HURT)
                        if (this.x < this.world.level.level_end_x) {
                            this.moveRight();
                        }
                        setTimeout(() => {
                            this.hurt = false;
                        }, 2000);
                    }
                    if (this.attack == true && this.hurt == false) {
                        this.playAnimation(this.IMAGES_ATTACK);
                        if (this.x > this.world.level_start_x) {

                        }
                        this.moveLeft();
                        setTimeout(() => {
                            this.attack = false;
                        }, 3000);
                    }
                    if (this.i < 10 && this.bossSpawned == true && this.attack == false) {
                        this.playAnimation(this.IMAGES_SPAWN)
                        this.i++
                        setTimeout(() => {
                            this.world.invulnerableBoss
                        }, 2000);
                    }
                    if (this.i >= 10 && this.bossSpawned == true && this.hurt == false && this.attack == false) {
                        if (this.x < this.world.level.level_end_x) {
                            this.moveRight();
                        }
                        this.playAnimation(this.IMAGES_IDLE)
                    }
                }
            }
        }, 150);

        setInterval(() => {
            if (this.i >= 10 && !pause) {
                this.attack = true
            }
        }, 3000 + Math.random() * 1000);
    }


}
