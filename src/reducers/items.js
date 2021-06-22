const initialState = {
    items: []
}
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'FETCH_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default reducers