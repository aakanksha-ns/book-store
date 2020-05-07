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
            <div className="container">
                <div className="row center-div">
                    <div className="col-12 order-placed">
                        Your order has been placed!
                    </div>
                    <div className="col-12 thank-you">
                        Thank you for shopping with us.
                    </div>
                </div>
                <div className="row center-div">
                    <div className="col-12 order-details">
                        ORDER DETAILS
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr className="cart-table-header">
                                    <th scope="col"> </th>
                                    <th scope="col">Product</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody className="cart-table-body">

                                {items.map((book) => {
                                    return (
                                        <tr key={book.isbn}>
                                            <td><img src={book.image_url} className="cart-image" /> </td>
                                            <td><span className="padding-top">{book.book_title}</span></td>
                                            <td>
                                                <span className="padding-top">{book.quantity}</span>
                                            </td>

                                            <td className="text-right"><span className="padding-top">$ {book.price * book.quantity}</span></td>
                                        </tr>
                                    )
                                })}

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>$ {
                                        get_total(items)
                                    }
                                    </strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="col-12 center-div">
                <Link to="/shop"><button className="btn btn-lg btn-block btn-light text-uppercase place-new-order" onClick={() => {
                    remove_all_from_cart();
                }}>Place New Order</button></Link>
            </div>
        </div >
    );
};

export default Checkout;
