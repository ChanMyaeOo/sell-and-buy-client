import * as API from '../api'

export const createItem = (item) => async (dispatch) => {
    try {
        const { data } = await API.createItem(item)
        console.log(data)
        dispatch({ type: 'CREATE_ITEM', payload: data})
    } catch(error) {
        console.log(error)
    }
}