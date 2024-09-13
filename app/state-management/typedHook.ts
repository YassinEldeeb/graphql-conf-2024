import { createTypedHooks } from 'easy-peasy'
import { EasyPeasyStore } from './@types/easy-peasy-store'

const typedHooks = createTypedHooks<EasyPeasyStore>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
