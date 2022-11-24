import {makeAutoObservable} from 'mobx';


export default class StatStore {
    constructor() {
        this._stats = [
            
        ]
        makeAutoObservable(this)
    }

    setStats(stats) {
        this._stats = stats
    }

    get stats() {
        return this._stats
    }

}