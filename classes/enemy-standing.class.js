class StandingEnemy extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;
    offsetRight = 50;
    offsetBottom = 20;
    offsetLeft = 10;
    offsetTop = 10;

/**
 * Create and initialize objects from the StandingEnemy class.
 * @param {number} x - The canvas horizontal coordinate to load the image.
 * @param {number} y - The canvas vertical coordinate to load the image.
 */
    constructor(x, y) {
        super().loadImage(IMAGES.STANDINGENEMY.IDLE[0]);
        this.loadImages(IMAGES.STANDINGENEMY.IDLE);
        this.x = x;
        this.y = y;
        this.speed = 0.25 + Math.random() * 0.5
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (!pause) {
                this.playAnimation(IMAGES.STANDINGENEMY.IDLE)
            }
        }, 300);
    }
}