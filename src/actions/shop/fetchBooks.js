const fetchStarted = () => ({
    type: "FETCH_STARTED"
});

const fetchCompleted = (books) => ({
    type: "FETCH_COMPLETED",
    books: books
});

const fetchError = () => ({
    type: "FETCH_ERROR"
});


const formatBooks = bookList => {
    return bookList.map(item => {
        return {
            book_title: item.book_title,
            isbn: item.isbn,
            book_author: item.book_author,
            image_url: item.image_url,
            price: item.price,
            in_cart: false
        };
    });
};


const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchStarted());
        fetch('https://pika-book-store.herokuapp.com/fetch_books'
        ).then(
            resp => {
                resp.json().then(body => {
                    if (body) {
                        dispatch(fetchCompleted(formatBooks(body)));
                    } else {
                        dispatch(fetchError());
                    }
                });
            }
        );
    };
};

export default fetchBooks;