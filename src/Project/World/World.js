import * as THREE from 'three';
import Project from "../Project.js";
import Environment from './Environment.js';

export default class World
{
    constructor()
    {
        this.project = new Project();
        this.scene = this.project.scene;

        const Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )

        this.scene.add(Mesh);

        this.environment = new Environment();
    }

   

}