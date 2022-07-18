class Coinbar extends MovableObject {
    x = 50;
    y = 40;
    height = 175;
    width = 50;
    world;


    constructor() {
        super().loadImage(IMAGES.WORLD.BARS.COINBAR[0]);
        this.loadImages(IMAGES.WORLD.BARS.COINBAR)
        this.animate();
    }

    
    animate() {
        setInterval(() => {
            this.coinBar(IMAGES.WORLD.BARS.COINBAR);
        }, 1000 / 60);
    }
}