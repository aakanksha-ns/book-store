import React from "react";
import $ from 'jquery';


const Login = ({ username, password, loginUser, handleLoginChange }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form className="form-horizontal" >
                                <div className="form-group">
                                    <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="username" id="username" placeholder="Enter your Username"
                                                maxLength="25" minLength="4" pattern="^[a-zA-Z0-9_.-]*$"
                                                onChange={e => {
                                                    handleLoginChange(e.target.value, 'username');
                                                }} required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password"
                                                minLength="6"
                                                onChange={e => {
                                                    handleLoginChange(e.target.value, 'password');
                                                }} required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-lg btn-block login-button"
                                        onClick={e => {
                                            e.preventDefault();
                                            var formElement = $("form")[0];
                                            if (formElement.checkValidity()) {
                                                loginUser(username, password);
                                            } else {
                                                formElement.reportValidity();
                                            }
                                        }}>Login</button>
                                </div>
                                <div className="login-register">
                                    Not a member? <a href="/">Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;