import { connect } from "react-redux";
import Register from "../components/Register";
import registerUser from "../actions/register/registerUser";
import handleRegisterChange from "../actions/register/handleRegisterChange";


const mapStateToRegisterProps = state => {
    return {
        email: state.registerUser['register_email'],
        username: state.registerUser['register_username'],
        password: state.registerUser['register_password']
    };
};

const mapDispatchToRegisterProps = dispatch => {
    return {
        registerUser: (email, username, password) => {
            dispatch(registerUser(email, username, password));
        },
        handleRegisterChange: (event, stateName) => {
            dispatch(handleRegisterChange(event, stateName));
        }
    };
};

const RegisterForm = connect(mapStateToRegisterProps,
    mapDispatchToRegisterProps
)(Register);

export default RegisterForm;