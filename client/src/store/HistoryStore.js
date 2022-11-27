import {makeAutoObservable} from 'mobx';


export default class HistoryStore {
    constructor() {
        this._history = []
        makeAutoObservable(this)
    }

    setHistory(history) {
        this._history = history
    }

    get history() {
        return this._history
    }

}