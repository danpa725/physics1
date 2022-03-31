import App from "./App";
import Ball from "./Ball";

const TRAILING_COLOR = "rgba(255, 255, 255, .5)";

const canvasApp = new App();

const ballArray = Array.from({ length: 75 }).map(() => new Ball(canvasApp.ctx));
const ballArrayLength = ballArray.length;

function animateCircle() {
    requestAnimationFrame(animateCircle);

    //* trailing 효과
    //* 투명도 50% 직사각형으로 canvas 덮기 -> 희미한 자취 남기기

    canvasApp.ctx.fillStyle = TRAILING_COLOR;
    canvasApp.ctx.fillRect(0, 0, canvasApp.width, canvasApp.height);

    for (let idx = 0; idx < ballArrayLength; idx++) ballArray[idx].drawCircle();
}

animateCircle();
