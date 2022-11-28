import * as THREE from 'three';
import Project from "../Project.js";

export default class Environment
{
    constructor()
    {
        this.project = new Project();
        this.scene = this.project.scene;
        this.setSunLight();
    }

    setSunLight()
    {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3, 3, - 2.25)
        this.scene.add(this.sunLight)
    }
}