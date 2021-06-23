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
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item => item._id === action.payload._id ? action.payload : item)
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}

export default reducers