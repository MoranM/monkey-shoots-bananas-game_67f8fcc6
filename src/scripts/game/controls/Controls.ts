import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Controls {
    private controls: OrbitControls;

    constructor(camera: THREE.Camera) {
        this.controls = new OrbitControls(camera, document.body);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.enableZoom = true;
    }

    public update(): void {
        this.controls.update();
    }
}