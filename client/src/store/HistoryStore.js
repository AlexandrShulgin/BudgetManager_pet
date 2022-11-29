import {makeAutoObservable} from 'mobx';


export default class HistoryStore {
    constructor() {
        this._history = []
        this._update = []
        makeAutoObservable(this)
    }

    setHistory(history) {
        this._history = history
    }

    setUpdate(update) {
        this._update = update
    }

    get history() {
        return this._history
    }

    get update() {
        return this._update
    }

}