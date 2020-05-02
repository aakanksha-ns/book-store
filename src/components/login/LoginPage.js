import React from "react";
import '../../styles/ChapterApp.css'
import LoginForm from "../../containers/Login";

const LoginPage = () => {
    return (<div>
        <div className="login-section">
            <div className="container max-width-extend">
                <div className="row disp-flex">
                    <LoginForm />
                </div>
            </div>
        </div>
    </div>)
};

export default LoginPage;