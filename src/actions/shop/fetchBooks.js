const fetchStarted = () => ({
    type: "FETCH_STARTED"
});

const fetchCompleted = (books) => ({
    type: "FETCH_COMPLETED",
    books: books
});

const fetchError = () => ({
    type: "FETCH_ERROR"
})


const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchStarted());
        fetch('https://pika-book-store.herokuapp.com/fetch_books'
        ).then(
            resp => {
                resp.json().then(body => {
                    if (body) {
                        dispatch(fetchCompleted(body));
                    } else {
                        dispatch(fetchError());
                    }
                });
            }
        );
    };
};

export default fetchBooks;