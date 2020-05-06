const addToCart = (book) => ({
    type: "ADD_TO_CART",
    book: { ...book, quantity: 1 }
});


export default addToCart;