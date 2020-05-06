import { connect } from "react-redux";
import ShopPage from "../components/ShopPage";
import fetchBooks from "../actions/shop/fetchBooks";
import removeFromCart from "../actions/shop/removeFromCart";
import markBookInCart from "../actions/shop/markBookInCart";
import markBookNotInCart from "../actions/shop/markBookNotInCart";
import addToCart from "../actions/shop/addToCart";
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    fetch_completed: state.shopPage['fetch_completed'],
    books: state.shopPage['books']
});

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBooks: () => dispatch(fetchBooks()),
        removeFromCart: (book) => dispatch(removeFromCart(book)),
        addToCart: (book) => dispatch(addToCart(book)),
        markBookInCart: (book) => dispatch(markBookInCart(book)),
        markBookNotInCart: (book) => dispatch(markBookNotInCart(book))
    })
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopPage));