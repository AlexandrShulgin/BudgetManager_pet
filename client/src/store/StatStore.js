import {makeAutoObservable} from 'mobx';


export default class StatStore {
    constructor() {
        this._stats = []
        this._update = []
        makeAutoObservable(this)
    }

    setStats(stats) {
        this._stats = stats
    }

    get stats() {
        return this._stats
    }

    setUpdate(update) {
        this._update = update
    }

    get update() {
        return this._update
    }
}