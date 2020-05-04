const loginUser = (state = {
    login_password: "Enter your password",
    login_username: "Enter your Username",
    login_started: false,
    login_error: false,
    login_completed: false
}, action) => {
    switch (action.type) {
        case "CHANGE_LOGIN_VALUE":
            switch (action.stateName) {
                case "username":
                    return {
                        ...state,
                        login_username: action.value,
                    };
                case "password":
                    return {
                        ...state,
                        login_password: action.value,
                    };
                default:
                    return state;
            }

        case "LOGIN_STARTED":
            return {
                ...state,
                login_started: true
            };

        case "LOGIN_ERROR":
            return {
                ...state,
                login_error: true,
                login_started: false
            };

        case "LOGIN_COMPLETED":
            return {
                ...state,
                login_started: false
            };

        default:
            return state;
    }
};

export default loginUser;