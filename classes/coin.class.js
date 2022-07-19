class Coin extends MovableObject {
    height = 45;
    width = 45;

    /**
     * Create and initialize objects from the Coin class.
     * @param {number} x - The canvas horizontal coordinate to load the image.
     * @param {number} y - 	The canvas vertical coordinate to load the image.
     */
    constructor(x, y) {
        super().loadImage(IMAGES.WORLD.COLLECTABLE.COINS.IDLE[0]);
        this.loadImages(IMAGES.WORLD.COLLECTABLE.COINS.IDLE);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (!pause) {
                this.playAnimation(IMAGES.WORLD.COLLECTABLE.COINS.IDLE);
            }
        }, 100);
    }
}