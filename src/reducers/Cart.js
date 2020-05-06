const cart = (state = {
    items: []
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.book]
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.isbn !== action.book.isbn)
            };

        case "REMOVE_ALL_FROM_CART":
            return {
                ...state,
                items: []
            };

        case "INCREASE_QUANTITY":
            return {
                ...state,
                items: state.items.map(
                    (book) => book.isbn === action.book.isbn ? { ...book, quantity: book.quantity + 1 }
                        : book
                )
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                items: state.items.map(
                    (book) => book.isbn === action.book.isbn ? { ...book, quantity: book.quantity - 1 }
                        : book
                )
            };

        default:
            return state;
    }
};

export default cart;