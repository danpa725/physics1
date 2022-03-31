class Vector {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }

    public add(addX: number, addY: number) {
        this.x += addX;
        this.y += addY;
        return this;
    }

    public subtract(subsX: number, subsY: number) {
        this.x -= subsX;
        this.y -= subsY;
        return this;
    }

    public multiple(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    public divide() {
        return this;
    }
}

export default Vector;
