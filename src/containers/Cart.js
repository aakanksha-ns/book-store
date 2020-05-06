import { connect } from "react-redux";
import Cart from "../components/Cart";
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
    is_empty: state.cart['is_empty'],
    items: state.cart['items']
});



export default withRouter(connect(mapStateToProps, null)(Cart));