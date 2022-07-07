class MovableObject {
    x = 120;
    y = 250;
    speed = 1;
    img;
    height = 100;
    width = 150;
    imageCatch = {}
    currentImage = 0;
    otherDirection = false;
    position = 400; 



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image()
            img.src = path;
            this.imageCatch[path] = img;
        });
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentImage++;
    }

    noKeyPressed() {
        return this.world.keyboard.RIGHT == false && this.world.keyboard.LEFT == false && this.world.keyboard.UP == false && this.world.keyboard.DOWN == false;
    }

    anyKeyPressed() {
        return this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true || this.world.keyboard.UP == true || this.world.keyboard.DOWN == true;
    }

    leftKeyPressed() {
        return this.world.keyboard.LEFT == true;

    }

    rightKeyPressed() {
        return this.world.keyboard.RIGHT == true;
        
    }

    downKeyPressed() {
        return this.world.keyboard.DOWN == true;
    }

    upKeyPressed() {
        return this.world.keyboard.UP == true;
    }

    cKeyPressed() {
        return this.world.keyboard.C == true;
    }

    spaceKeyPressed() {
        return this.world.keyboard.SPACE == true;
    }
}