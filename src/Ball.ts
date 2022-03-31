import Vector from "./Vector";

import { getRandomArbitraryNumber, getRandomColor } from "./utils";

interface CollideProps {
    container: {
        maxX: number;
        maxY: number;
    };
    currentPosition: {
        x: number;
        y: number;
    };
    radius: number;
}

class Ball {
    private position;
    private velocity;
    private acc;

    private radius: number;
    private radiuseDelta: number;

    private containerSize: {
        maxX: number;
        maxY: number;
    };

    private ctx: CanvasRenderingContext2D;

    private fillColor: string;
    private strokeColor: string;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;

        const { rgb, rgba } = getRandomColor();
        (this.strokeColor = rgb), (this.fillColor = rgba);
        this.containerSize = {
            maxX: window.innerWidth,
            maxY: window.innerHeight,
        };

        this.position = new Vector(
            getRandomArbitraryNumber(0, this.containerSize.maxX),
            getRandomArbitraryNumber(0, this.containerSize.maxY)
        );

        this.radiuseDelta = 0.1;
        this.radius = getRandomArbitraryNumber(5, 10);

        this.velocity = new Vector(
            this.radius + getRandomArbitraryNumber(1, 2),
            this.radius + getRandomArbitraryNumber(1, 3)
        );

        this.acc = new Vector(0.1, 1);
    }

    private getCollideState({
        container: { maxX, maxY },
        currentPosition: { x, y },
        radius,
    }: CollideProps): { isXCollide: boolean; isYCollide: boolean } {
        if (x <= radius)
            return {
                isXCollide: true,
                isYCollide: false,
            };
        if (y <= radius)
            return {
                isXCollide: false,
                isYCollide: true,
            };
        if (x >= maxX - radius)
            return {
                isXCollide: true,
                isYCollide: false,
            };
        if (y >= maxY - radius)
            return {
                isXCollide: false,
                isYCollide: true,
            };

        return {
            isXCollide: false,
            isYCollide: false,
        };
    }

    private updateVelocity() {
        this.velocity.y += this.acc.y;
        this.velocity.x += this.acc.x;
    }

    private updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        const { isXCollide, isYCollide } = this.getCollideState({
            container: this.containerSize,
            currentPosition: this.position,
            radius: this.radius,
        });

        if (isXCollide) {
            if (this.position.x < 0) this.position.x += 25;
            if (this.position.x > this.containerSize.maxX) this.position.x -= 25;
            this.velocity.x *= -1;
        }

        if (isYCollide) {
            if (this.position.y < 0) this.position.y += 25;
            if (this.position.y < this.containerSize.maxY) this.position.y -= 25;
            this.velocity.y *= -1;
        }
    }

    protected updateRadius() {
        this.radius += this.radiuseDelta;
        if (this.radius > 35) this.radiuseDelta *= -1;
        if (this.radius < 1) this.radiuseDelta *= -1;
    }

    public drawCircle() {
        this.updateRadius();
        this.updateVelocity();
        this.updatePosition();

        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.closePath();

        this.ctx.fill();
        this.ctx.fillStyle = this.fillColor;

        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.stroke();
    }
}

export default Ball;
