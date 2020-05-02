const loginStarted = () => ({
    type: "LOGIN_STARTED"
});

const loginCompleted = () => ({
    type: "LOGIN_COMPLETED"
});

const loginError = () => ({
    type: "LOGIN_ERROR"
})


const loginUser = (username, password, ownProps) => {
    return dispatch => {
        dispatch(loginStarted());
        fetch('https://pika-book-store.herokuapp.com/sign_in?' + new URLSearchParams({
            username: username,
            password: password
        })).then(
            resp => {
                resp.json().then(body => {
                    dispatch(loginCompleted());
                    if (body.signed_in) {
                        ownProps.history.push("/shop")
                    } else {
                        dispatch(loginError());
                    }
                });
            }
        );
    };
};

export default loginUser;