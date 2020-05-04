const registerUser = (state = {
    register_email: "Enter your email",
    register_username: "Enter your Username",
    register_password: "Enter your password",
    register_conf_password: "Confirm your password",
    register_started: false,
    register_error: false,
    register_completed: false
}, action) => {
    switch (action.type) {
        case "CHANGE_REGISTER_VALUE":
            switch (action.stateName) {
                case "email":
                    return {
                        ...state,
                        register_email: action.value,
                    };
                case "username":
                    return {
                        ...state,
                        register_username: action.value,
                    };
                case "password":
                    return {
                        ...state,
                        register_password: action.value,
                    };
                case "conf_password":
                    return {
                        ...state,
                        register_conf_password: action.value,
                    };
                default:
                    return state;
            }

        case "REGISTER_STARTED":
            return {
                ...state,
                register_started: true
            };

        case "REGISTER_ERROR":
            return {
                ...state,
                register_error: true,
                register_started: false
            };

        case "REGISTER_COMPLETED":
            return {
                ...state,
                register_started: false
            };

        default:
            return state;
    }
};

export default registerUser;