const remove_cart = () => ({
    type: "REMOVE_ALL_FROM_CART"
});

const mark_not_in_cart = () => ({
    type: "MARK_ALL_BOOKS_NOT_IN_CART"
});



const remove_all_from_cart = () => {
    return dispatch => {
        dispatch(remove_cart());
        dispatch(mark_not_in_cart());
    };
};

export default remove_all_from_cart;