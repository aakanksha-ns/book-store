import React, { Component } from "react";
import '../styles/ShopPage.css';
import { Card, Grid, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import Spinner from "./Spinner";


const add_delete_cart = (book, props) => {
    if (book.in_cart) {
        return (<Button size="large" className="add-cart" onClick={() => {
            props.removeFromCart(book);
            props.markBookNotInCart(book);
        }}>Remove from Cart</Button>)
    } else {
        return (<Button size="large" color="primary" className="add-cart" onClick={() => {
            props.addToCart(book);
            props.markBookInCart(book);
        }}>Add to Cart</Button>)
    }
}

class ShopPage extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return this.props.fetch_completed
            ?
            <div className="books-paper">
                <Grid container spacing={9} justify="space-evenly" alignItems="center">
                    {this.props.books.map((book) => {
                        return (
                            <Grid item key={book.book_title}>
                                <Card>
                                    <CardMedia
                                        className="card-media"
                                        image={book.image_url}
                                        title={book.book_title}
                                    />
                                    <CardContent className="card-content">
                                        <div className="proj-title">
                                            {book.book_title}
                                        </div>
                                        <div>
                                            {book.book_author}
                                        </div>
                                    </CardContent>

                                    <CardActions>
                                        <div className="container card-bottom">
                                            <div className="row">
                                                <div className="col-10">
                                                    {add_delete_cart(book, this.props)}
                                                </div>
                                                <div className="col-2">
                                                    <p className="price-tag">$5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>

            : <Spinner />
    }
}

export default ShopPage;
