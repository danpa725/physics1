class App {
    static instance: App;

    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public width: number;
    public height: number;

    constructor() {
        App.instance = this;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d")!;

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        window.addEventListener("load", () =>
            this.setCanvasSize(this.width, this.height)
        );
    }

    setCanvasSize(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", () =>
            this.setCanvasSize(window.innerWidth, window.innerHeight)
        );
    }
}

export default App;
