class backgroundObject extends MovableObject {

    height = 720;
    width = 480;

    /**
     * Create and initialize objects from the backgroundObject class.
     * @param {Array} imagePath - The first image of the array.
     * @param {number} x - The canvas horizontal coordinate to load the image.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.width;
    }
}