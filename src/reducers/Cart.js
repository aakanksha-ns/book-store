const cart = (state = {
    is_empty: true,
    items: []
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("im here adding" + action.book);
            return {
                ...state,
                items: [...state.items, action.book]
            };

        case "REMOVE_FROM_CART":
            console.log("im here removing");
            return {
                ...state
            };

        default:
            return state;
    }
};

export default cart;