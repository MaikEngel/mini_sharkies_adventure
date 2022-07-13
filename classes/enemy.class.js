class Enemy extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;

    offsetRight = 50;
    offsetBottom = 20;
    offsetLeft = 10;
    offsetTop = 10;

    turnAround = false;

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ]


    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = x;
        this.y = y;
        this.speed = 0.25 + Math.random() * 0.5
        this.animate();
        this.changeDirection();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING)
        }, 100);
        setInterval(() => {
            if (this.turnAround == true) {
                this.moveRight()
            } else {
                this.moveLeft()
            }
        }, 1000 / 60);

    }

    changeDirection() {
        setInterval (() => {
            if (this.turnAround == true) {
                this.turnAround = false;
            } else {
                this.turnAround = true;
            }
        }, 10000);
    }
}