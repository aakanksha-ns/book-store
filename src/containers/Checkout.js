import { connect } from "react-redux";
import Checkout from "../components/Checkout";
import { withRouter } from 'react-router-dom';
import remove_all_from_cart from "../actions/cart/remove_all_from_cart";

const mapStateToProps = (state) => ({
    items: state.cart['items']
});

const mapDispatchToProps = (dispatch) => {
    return ({
        remove_all_from_cart: () => dispatch(remove_all_from_cart())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));