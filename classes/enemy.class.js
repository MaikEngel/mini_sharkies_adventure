class Enemy extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;
    offsetRight = 50;
    offsetBottom = 20;
    offsetLeft = 10;
    offsetTop = 10;
    time = 6000 + Math.random() * 4000
    turnAround = false;

    /**
     * Create and initialize objects from the Enemy class.
     * @param {number} x - The canvas horizontal coordinate to load the image.
     * @param {number} y - The canvas vertical coordinate to load the image.
     */
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

    /**
     * Turns the enemy over and makes them swim left or right.
     */
    turnEnemyAround() {
        if (this.turnAround) {
            this.moveRight();
            this.otherDirection = true;
        } else {
            this.moveLeft();
            this.otherDirection = false;
        }
    }

    /**
     * Checks the enemy's direction.
     */
    checkEnemyDirection() {
        if (this.turnAround) {
            this.turnAround = false;
        } else {
            this.turnAround = true;
        }
    }
}