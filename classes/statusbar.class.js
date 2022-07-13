class Statusbar extends MovableObject {
    x = 50;
    y = 0;
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