class Statusbar extends MovableObject {
    x = 50;
    y = 0;
    height = 175;
    width = 50;
    world;

    /**
     * Create and initialize objects from the Statusbar class.
     */
    constructor() {
        super().loadImage(IMAGES.WORLD.BARS.STATUSBAR[0]);
        this.loadImages(IMAGES.WORLD.BARS.STATUSBAR);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.lifeBar(IMAGES.WORLD.BARS.STATUSBAR);
        }, 1000 / 60);
    }
}