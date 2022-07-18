class Poisonbar extends MovableObject {
    x = 50;
    y = 80;
    height = 175;
    width = 50;
    world;

    constructor() {
        super().loadImage(IMAGES.WORLD.BARS.POISONBAR[0]);
        this.loadImages(IMAGES.WORLD.BARS.POISONBAR)

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.poisonBar(IMAGES.WORLD.BARS.POISONBAR);
        }, 1000 / 60);
    }
}