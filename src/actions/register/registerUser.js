const showLoginPage = () => ({
    type: "SIGN_IN"
});

const registerStarted = () => ({
    type: "REGISTER_STARTED"
});

const registerCompleted = () => ({
    type: "REGISTER_COMPLETED"
});

const registerError = () => ({
    type: "REGISTER_ERROR"
})


const registerUser = (username, email, password) => {
    return dispatch => {
        dispatch(registerStarted());
        fetch('https://pika-book-store.herokuapp.com/register?' + new URLSearchParams({
            username: username,
            email: email,
            password: password
        })).then(
            resp => {
                resp.json().then(body => {
                    dispatch(registerCompleted());
                    if (body.user_added) {
                        dispatch(showLoginPage());

                    } else {
                        dispatch(registerError());
                    }
                });
            }
        );
    };
};

export default registerUser;