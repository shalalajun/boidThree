import Sizes from "./Utils/sizes.js"

export default class Project
{
    constructor(canvas)
    {
        window.project = this
        this.canvas =canvas
        this.sizes = new Sizes()
    }
}