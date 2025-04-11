import * as THREE from 'three';

export class Scene {
    private scene: THREE.Scene;

    constructor() {
        this.scene = new THREE.Scene();
        const ambientLight = new THREE.AmbientLight(0x404040);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();

        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
    }

    public get(): THREE.Scene {
        return this.scene;
    }
}