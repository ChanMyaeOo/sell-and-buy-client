import * as API from '../api'

export const createItem = (item) => async (dispatch) => {
    try {
        const { data } = await API.createItem(item)
        dispatch({ type: 'CREATE_ITEM', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getItems = () => async (dispatch) => {
    try {
        const { data } = await API.getItems()
        dispatch({ type: 'FETCH_ITEMS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateItem = (id, itemToUpdate) => async (dispatch) => {
    try {
        const { data } = await API.updateItem(id, itemToUpdate)
        dispatch({ type: 'UPDATE_ITEM', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
        await API.deleteItem(id)
        dispatch({ type: 'DELETE_ITEM', payload: id })
    } catch (error) {
        console.log(error)
    }
}