import { connect } from "react-redux";
import ShopPage from "../components/ShopPage";
import fetchBooks from "../actions/shop/fetchBooks";
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    fetch_completed: state.shopPage['fetch_completed'],
    books: state.shopPage['books']
});

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBooks: () => dispatch(fetchBooks())
    })
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopPage));