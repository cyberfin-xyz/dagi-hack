import { makeAutoObservable, toJS } from 'mobx'


class MainStore {
    displayLocation: any = ''

    constructor() {
        makeAutoObservable(this)
    }

    getDisplayLocation() {
        return this.displayLocation;
    }

    setDisplayLocation(val: any) {
        this.displayLocation = val;
    }
}

export default new MainStore()