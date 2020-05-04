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
            console.log("fetch complete");
            return {
                ...state,
                fetch_started: false,
                fetch_completed: true,
                books: action.books
            };

        default:
            return state;
    }
};

export default shopPage;