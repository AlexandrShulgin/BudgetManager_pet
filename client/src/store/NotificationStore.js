import {makeAutoObservable} from 'mobx';


export default class NotificationStore {
    constructor() {
        this._notifications = []
        makeAutoObservable(this)
    }

    setNotifications(notifications) {
        this._notifications = notifications
    }

    get notifications() {
        return this._notifications
    }

}