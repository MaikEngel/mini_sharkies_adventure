class ThrowableObject extends MovableObject {

    /**
     * Create and initialize objects from the ThrowableObject class.
     * @param {number} x - The canvas horizontal coordinate to load the image.
     * @param {number} y - The canvas vertical coordinate to load the image.
     */
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.trow()
        this.height = 50;
        this.width = 50;
    }

    /**
     * Throws an object.
     */
    trow() {
        this.speedX = 20;
        this.applyPressure();
        setTimeout(() => {
            this.applyAir();
        }, 2000);
    }
}

