export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.05;
        this.cur = index;
        this.max = Math.random() * 2 * Math.PI * 30;
    }

    update() {
        this.max += this.speed;
        this.y = this.fixedY + (Math.sin(this.max) * 200);
    }

}