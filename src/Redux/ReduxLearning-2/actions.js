import { types } from './const'

const setListAction = (payload = []) => ({
    type: types.SET_LIST,
    payload,
})

const addToCartAction = (payload = '') => ({
    type: types.ADD_TO_CART,
    payload,
})

const removeFromCartAction = (payload = '') => ({
    type: types.REMOVE_FROM_CART,
    payload,
})

const showModal = (payload = Boolean) => ({
    type: types.SHOW_MODAL,
    payload
})
const hideModal = (payload = Boolean) => ({
    type: types.HIDE_MODAL,
    payload
})

export const actions = {
    setListAction,
    addToCartAction,
    removeFromCartAction,
    hideModal,
    showModal
}