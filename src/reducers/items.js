const reducers =  (items = [], action) => {
    switch (action.type) {
        case 'CREATE_ITEM':
            return [...items, action.payload]
        default:
            return items
    }
}

export default reducers