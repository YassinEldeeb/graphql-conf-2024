import { action, createStore } from 'easy-peasy'
import { EasyPeasyStore } from './@types/easy-peasy-store'


export const easyPeasyStore = createStore<EasyPeasyStore>({
    name: 'Yassin',
    changeName: action((state, payload) => {
        state.name = payload
    })
})
