import { Scene } from './Scene';
import { Camera } from './Camera';
import { Renderer } from './Renderer';
import { Controls } from './controls/Controls';

export class Game {
    private scene: Scene;
    private camera: Camera;
    private renderer: Renderer;
    private controls: Controls;

    constructor() {
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.controls = new Controls(this.camera);

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    public start(): void {
        this.animate();
    }

    private animate(): void {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene.get(), this.camera.get());
    }

    private onWindowResize(): void {
        this.camera.onResize(window.innerWidth, window.innerHeight);
        this.renderer.onResize(window.innerWidth, window.innerHeight);
    }
}