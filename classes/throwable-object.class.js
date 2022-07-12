class ThrowableObject extends MovableObject {


    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.trow()
        this.height = 50;
        this.width = 50;
    }


    trow() {
        console.log(this.otherDirection)
        this.speedX = 20;
        this.applyPressure();
        setTimeout(() => {
            this.applyAir();
        }, 2000);
    }
}

