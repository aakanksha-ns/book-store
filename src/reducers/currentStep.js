const currentStep = (state = { currentStep: "Sign in" }, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                currentStep: "Sign in"
            }
        case "SHOP":
            return {
                ...state,
                currentStep: "Shop"
            }
        default:
            return state;
    }
};

export default currentStep;