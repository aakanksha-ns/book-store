import { connect } from "react-redux";
import Cart from "../components/Cart";
import { withRouter } from 'react-router-dom';
import removeFromCart from "../actions/shop/removeFromCart";
import add_quantity from "../actions/cart/add_quantity";
import decrease_quantity from "../actions/cart/decrease_quantity";
import markBookNotInCart from "../actions/shop/markBookNotInCart";

const mapStateToProps = (state) => ({
    items: state.cart['items']
});

const mapDispatchToProps = (dispatch) => {
    return ({
        removeFromCart: (book) => dispatch(removeFromCart(book)),
        markBookNotInCart: (book) => dispatch(markBookNotInCart(book)),
        add_quantity: (book) => dispatch(add_quantity(book)),
        decrease_quantity: (book) => dispatch(decrease_quantity(book))
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));