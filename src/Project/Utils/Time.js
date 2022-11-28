import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
    }


    tick()
    {
        window.requestAnimationFrame(()=>
        {
            this.tick();
        })
    }
}