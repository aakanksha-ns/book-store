const shopPage = (state = {
    books: undefined,
    fetch_started: false,
    fetch_completed: false,
    fetch_error: false
}, action) => {
    switch (action.type) {
        case "FETCH_STARTED":
            return {
                ...state,
                fetch_started: true
            };

        case "FETCH_ERROR":
            return {
                ...state,
                fetch_error: true
            };

        case "FETCH_COMPLETED":
            return {
                ...state,
                fetch_started: false,
                fetch_completed: true,
                books: action.books
            };

        case "MARK_BOOK_IN_CART":
            return {
                ...state,
                books: state.books.map(
                    (book) => book.isbn === action.book.isbn ? { ...book, in_cart: true }
                        : book
                )
            }

        case "MARK_BOOK_NOT_IN_CART":
            return {
                ...state,
                books: state.books.map(
                    (book) => book.isbn === action.book.isbn ? { ...book, in_cart: false }
                        : book
                )
            };

        case "MARK_ALL_BOOKS_NOT_IN_CART":
            return {
                ...state,
                books: state.books.map(
                    (book) => { return ({ ...book, in_cart: false }) }
                )
            };

        default:
            return state;
    }
};

export default shopPage;