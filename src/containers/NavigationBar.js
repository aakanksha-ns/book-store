import { connect } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import { withRouter } from 'react-router-dom';


const mapStateToLoginProps = state => {
    return {
        current_user: state.currentUser['current_user'],
        logged_in: state.currentUser['logged_in']
    };
};


const NavBar = withRouter(connect(mapStateToLoginProps,
    null
)(NavigationBar));

export default NavBar;