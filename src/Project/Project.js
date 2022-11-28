import * as THREE from 'three'
import Sizes from "./Utils/sizes.js"
import Time from "./Utils/Time.js"
import Camera from './Camera.js';

let instance = null;

export default class Project
{
    constructor(canvas)
    {

        if(instance)
        {
            return instance;
        }

        instance = this;

        window.project = this;
        this.canvas =canvas;
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera(this);

        this.sizes.on('resize',()=>
        {
            this.resize();
        })

        this.time.on('tick',()=>
        {
            this.update();
        })
    }

    resize()
    {
    }

    update()
    {
    }
}