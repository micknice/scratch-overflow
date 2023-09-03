import {makeAutoObservable} from 'mobx'


class Store {
    
    flipCount = 0
    constructor() {
        makeAutoObservable(this)
    }

    incrementFlipCount() {
        this.flipCount += 1
    }
}

const store = new Store()

export default store
