import Sizes from "./Utils/sizes.js"
import Time from "./Utils/Time.js"

export default class Project
{
    constructor(canvas)
    {
        window.project = this
        this.canvas =canvas
        this.sizes = new Sizes()
        this.time = new Time()

        this.sizes.on('resize',()=>
        {
            this.resize()
        })
    }

    resize()
    {
    }
}