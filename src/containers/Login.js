import { connect } from "react-redux";
import Login from "../components/login/LoginUser";
import loginUser from "../actions/login/loginUser";
import handleLoginChange from "../actions/login/handleLoginChange";
import { withRouter } from 'react-router-dom';


const mapStateToLoginProps = state => {
    return {
        username: state.loginUser['login_username'],
        password: state.loginUser['login_password']
    };
};

const mapDispatchToLoginProps = (dispatch, ownProps) => {
    return {
        loginUser: (username, password) => {
            dispatch(loginUser(username, password, ownProps));
        },
        handleLoginChange: (event, stateName) => {
            dispatch(handleLoginChange(event, stateName));
        }
    };
};

const LoginForm = withRouter(connect(mapStateToLoginProps,
    mapDispatchToLoginProps
)(Login));

export default LoginForm;