import {makeAutoObservable} from "mobx"
import easy from './easy.mp3'

class Store {
    constructor() {
        makeAutoObservable(this)
    }
    loading = false

    on_press = async () => {
        this.loading = true
        await new Promise(resolve => { 
            var audiop = new Audio(easy)
            audiop.onended = resolve 
            audiop.play()
        });
        this.loading = false
    }
}

export const store = window.store = new Store()