const currentUser = (state = { current_user: null, logged_in: false }, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return {
                ...state,
                current_user: action.username,
                logged_in: true
            };
        case "LOG_OUT":
            return {
                ...state,
                logged_in: false
            };
        default:
            return state;
    }
};

export default currentUser;