class Poisonbar extends MovableObject {
    x = 50;
    y = 80;
    height = 175;
    width = 50;
    world;

    IMAGES_POISONBAR = [
        'img/4. Marcadores/orange/0_ copia.png',
        'img/4. Marcadores/orange/20_ copia.png',
        'img/4. Marcadores/orange/40_ copia.png',
        'img/4. Marcadores/orange/60_ copia.png',
        'img/4. Marcadores/orange/80_ copia.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_POISONBAR[0]);
        this.loadImages(this.IMAGES_POISONBAR)

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.poisonBar(this.IMAGES_POISONBAR);
        }, 1000 / 60);
    }
}