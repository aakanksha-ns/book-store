import React from "react";
import '../styles/Cart.css';


const Cart = ({ items, removeFromCart, markBookNotInCart, add_quantity, decrease_quantity }) => {
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
                                            () => {
                                                const total = 0;
                                                for (var i = 0; i < items.length; i++) {
                                                    total += (items[i].price) * (items[i].quantity)
                                                }
                                                return total
                                            }
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
                                <button className="btn btn-lg btn-block btn-light text-uppercase">Continue Shopping</button>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Cart;
