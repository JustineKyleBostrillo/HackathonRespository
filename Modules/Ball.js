export class Ball {
    constructor(x,y,color,size,velx,vely) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velx = velx;
        this.vely = vely;
    };

    animate(canvas) {
        this.x += this.velx;
        this.y += this.vely;

        if(this.x >= canvas.width  || this.x <= 0) {
            this.velx *= -1;
        };
        if(this.y >= canvas.height || this.y <= 0) {
            this.vely *= -1;
        };
    };
};