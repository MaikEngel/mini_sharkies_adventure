class StatusbarEndboss extends MovableObject {
    x = 480;
    y = 0;
    height = 0;
    width = 0;
    world;



    /**
     * Create and initialize objects from the StatusbarEndboss class.
     */
    constructor() {
        super().loadImage(IMAGES.WORLD.BARS.ENDBOSSBAR[0]);
        this.loadImages(IMAGES.WORLD.BARS.ENDBOSSBAR);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.lifeBar(IMAGES.WORLD.BARS.ENDBOSSBAR);
            if (this.world.spawn) {
                this.height = 175;
                this.width = 50;
            }
        }, 1000 / 60);
    }
}