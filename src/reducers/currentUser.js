const currentUser = (state = { current_user: null }, action) => {
    switch (action.type) {
        case "SELECT_USER":
            return {
                ...state,
                current_user: action.username
            };
        default:
            return state;
    }
};

export default currentUser;