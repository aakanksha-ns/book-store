import React, { Component } from "react";
import '../../styles/ShopPage.css';
import { Card, Paper, Grid, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';


class ShopPage extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return this.props.fetch_completed
            ?

            <Paper className="books-paper">
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
                                        <Button size="large" color="primary" className="add-cart">Add to Cart</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
            : <div>not ready</div>
    }
}

export default ShopPage;
