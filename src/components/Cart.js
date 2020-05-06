import React from "react";
import '../styles/Cart.css';
import { Link } from "react-router-dom";
import emptyCart from '../resources/empty_cart.png';


const get_total = (items) => {

    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += (items[i].price) * (items[i].quantity)
    }
    return total

}


const Cart = ({ items, removeFromCart, markBookNotInCart, add_quantity, decrease_quantity }) => {

    if (items.length === 0) {
        return (
            <div className="container empty-cart-section">
                <div className="row">
                    <div className="col-12 center-div">
                        <img className="empty-cart" src={emptyCart}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="emptyCart-text col-12">Hey, it feels so light!</div>
                </div>
                <div className="row">
                    <div className="emptyCart-desc col-12">There is nothing in your cart. Let's add some items.</div>
                </div>
                <div className="row">
                    <div className="col-12 center-div">
                        <Link to="/shop"><button className="btn btn-lg btn-block btn-light text-uppercase back-to-shop">Back to Shop</button></Link>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className="cart-section">
                <div className="container cart-table">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className="cart-table-header">
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col" className="text-center">Quantity</th>
                                            <th scope="col" className="text-right">Price</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody className="cart-table-body">

                                        {items.map((book) => {
                                            return (
                                                <tr key={book.isbn}>
                                                    <td><img src={book.image_url} className="cart-image" /> </td>
                                                    <td><span className="padding-top">{book.book_title}</span></td>
                                                    <td>
                                                        <form className="counter">
                                                            <div className="value-button value-button-decrease" id="decrease" value="Decrease Value" onClick={
                                                                () => {
                                                                    decrease_quantity(book);
                                                                    if (book.quantity === 1) {
                                                                        removeFromCart(book);
                                                                    }
                                                                }
                                                            }>-</div>
                                                            <input type="number" id="number" value={book.quantity} readOnly />
                                                            <div className="value-button value-button-increase" id="increase" value="Increase Value" onClick={
                                                                () => { add_quantity(book) }
                                                            }>+</div>
                                                        </form>
                                                    </td>
                                                    <td className="text-right"><span className="padding-top">$ {book.price * book.quantity}</span></td>
                                                    <td className="text-right min-width"><button className="btn btn-sm btn-danger" onClick={() => {
                                                        removeFromCart(book);
                                                        markBookNotInCart(book);
                                                    }}>
                                                        Remove item </button> </td>
                                                </tr>
                                            )
                                        })}

                                        <tr>
                                            <td></td>
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
                        <div className="col mb-2">
                            <div className="row">
                                <div className="col-sm-12  col-md-6">
                                    <Link to="/shop"><button className="btn btn-lg btn-block btn-light text-uppercase">Continue Shopping</button></Link>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <Link to="/checkout"><button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    };
};

export default Cart;
