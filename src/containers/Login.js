import { connect } from "react-redux";
import Login from "../components/LoginUser";
import loginUser from "../actions/login/loginUser";
import handleLoginChange from "../actions/login/handleLoginChange";


const mapStateToLoginProps = state => {
    return {
        username: state.loginUser['login_username'],
        password: state.loginUser['login_password']
    };
};

const mapDispatchToLoginProps = dispatch => {
    return {
        loginUser: (username, password) => {
            dispatch(loginUser(username, password));
        },
        handleLoginChange: (event, stateName) => {
            dispatch(handleLoginChange(event, stateName));
        }
    };
};

const LoginForm = connect(mapStateToLoginProps,
    mapDispatchToLoginProps
)(Login);

export default LoginForm;