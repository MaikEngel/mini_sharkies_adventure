class Enemy extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;
    offsetRight = 50;
    offsetBottom = 20;
    offsetLeft = 10;
    offsetTop = 10;
    time = 6000 + Math.random() * 4000
    turnAround = false;


    constructor(x, y) {
        super().loadImage(IMAGES.ENEMY.SWIMMING[0]);
        this.loadImages(IMAGES.ENEMY.SWIMMING);
        this.x = x;
        this.y = y;
        this.speed = 0.25 + Math.random() * 0.5
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (!pause) {
                this.playAnimation(IMAGES.ENEMY.SWIMMING)
            }
        }, 100);


        setInterval(() => {
            if (!pause) {
                this.turnEnemyAround()
            }
        }, 1000 / 60);


        setInterval(() => {
            if (!pause) {
                this.checkEnemyDirection();
            }
        }, this.time);
    }


    turnEnemyAround() {
        if (this.turnAround == true) {
            this.moveRight();
            this.otherDirection = true;
        } else {
            this.moveLeft();
            this.otherDirection = false;
        }
    }

    
    checkEnemyDirection() {
        if (this.turnAround == true) {
            this.turnAround = false;
        } else {
            this.turnAround = true;
        }
    }
}