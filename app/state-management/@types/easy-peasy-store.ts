import { Action } from 'easy-peasy'

export interface EasyPeasyStore {
    name: string,
    changeName: Action<EasyPeasyStore, string>
}
