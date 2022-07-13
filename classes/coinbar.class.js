class Coinbar extends MovableObject {
    x = 50;
    y = 40;
    height = 175;
    width = 50;
    world;

    IMAGES_COINBAR = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_COINBAR[0]);
        this.loadImages(this.IMAGES_COINBAR)

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.coinBar(this.IMAGES_COINBAR);
        }, 1000 / 60);
    }
}