import { types } from './const'

const sentData = (payload = []) => ({
    type: types.SET_DATA,
    payload
})

export const actions = {
    sentData,
}