class Statusbar extends MovableObject {
    x = 50;
    y = 20;
    height = 175;
    width = 50;
    world;


    IMAGES_LIFEBAR = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/green/Life/100_  copia 2.png'
    ]

    IMAGES_COINBAR = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_LIFEBAR[0]);
        this.loadImages(this.IMAGES_LIFEBAR);
        this.loadImages(this.IMAGES_COINBAR)

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.lifeBar(this.IMAGES_LIFEBAR);
            this.coinBar(this.IMAGES_COINBAR);
        }, 1000 / 60);
    }
}