class DrawableObject {
    img;
    imageCatch = {}
    currentImage = 0;
    x = 120;
    y = 250;
    height = 100;
    width = 150;


    /**
     * 
     * @param {string} path - The path of the first image of each class.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {string} ctx - Draws the images on the right position on the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
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
}