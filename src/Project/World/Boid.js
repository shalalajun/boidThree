import * as THREE from 'three';
import Project from '../Project.js';
import World from './World.js';


// f = m * a 힘을 질량 곱하기 가속도
// a = f / m 가속도는 힘에서 질량을 나눈다. m 이 만약 1로 정의하면
// a = f 이다.

export default class Boid
{
    constructor()
    {
        this.project = new Project();
        this.scene = this.project.scene;
        this.vector = new THREE.Vector3();

        this.position = new THREE.Vector3();
        this.velocity = new THREE.Vector3();
        this.acceleration = new THREE.Vector3(0,0,0);

        this.gravity = new THREE.Vector3(0, 0.01, 0);

        this.width = window.innerWidth;
        this.height =window.innerHeight;
        this.depth = 1000;

        this.setMesh();
    }

    setMesh()
    {
        this.birdsGeometry = new THREE.BoxGeometry(1,1,1);
        this.birdsMaterial = new THREE.MeshStandardMaterial({color:'white'});
        this.birds = new THREE.Mesh(this.birdsGeometry, this.birdsMaterial);
        this.scene.add(this.birds);
      
    }

    update()
    {   
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.birds.position.add(this.position);
    }

    applyForce(force)
    {
        this.acceleration.add(force);
    }
}