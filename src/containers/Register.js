import { connect } from "react-redux";
import Register from "../components/register/Register";
import registerUser from "../actions/register/registerUser";
import handleRegisterChange from "../actions/register/handleRegisterChange";
import { withRouter } from 'react-router-dom';


const mapStateToRegisterProps = state => {
    return {
        email: state.registerUser['register_email'],
        username: state.registerUser['register_username'],
        password: state.registerUser['register_password']
    };
};

const mapDispatchToRegisterProps = (dispatch, ownProps) => {
    return {
        registerUser: (email, username, password) => {
            dispatch(registerUser(email, username, password, ownProps));
        },
        handleRegisterChange: (event, stateName) => {
            dispatch(handleRegisterChange(event, stateName));
        }
    };
};

const RegisterForm = withRouter(connect(mapStateToRegisterProps,
    mapDispatchToRegisterProps
)(Register));

export default RegisterForm;