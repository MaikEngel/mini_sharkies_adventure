class Statusbar extends MovableObject {
    x = 50;
    y = 0;
    height = 175;
    width = 50;
    world;


    IMAGES_LIFEBAR = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_LIFEBAR[0]);
        this.loadImages(this.IMAGES_LIFEBAR);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.lifeBar(this.IMAGES_LIFEBAR);
        }, 1000 / 60);
    }
}