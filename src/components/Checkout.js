import React from "react";
import '../styles/Checkout.css';
import { Link } from "react-router-dom";


const get_total = (items) => {

    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += (items[i].price) * (items[i].quantity)
    }
    return total

}


const Checkout = ({ items, remove_all_from_cart }) => {
    return (
        <div className="checkout-section">
            {get_total}
            <div className="col-12">
                <Link to="/shop"><button className="btn btn-lg btn-block btn-light text-uppercase" onClick={() => {
                    remove_all_from_cart();
                }}>Place New Order</button></Link>
            </div>
        </div >
    );
};

export default Checkout;
