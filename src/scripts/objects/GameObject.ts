import * as THREE from 'three';

export abstract class GameObject {
    protected mesh: THREE.Mesh;

    constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
        this.mesh = new THREE.Mesh(geometry, material);
    }

    public getMesh(): THREE.Mesh {
        return this.mesh;
    }
}