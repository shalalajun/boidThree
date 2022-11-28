import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from "./EventEmitter.js";
import Project from "../Project.js";

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super();

        this.sources = sources;

        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders()
    {
        this.loaders = {};
        this.loaders.gltfloader = new GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    }

    startLoading()
    {
        
    }
}