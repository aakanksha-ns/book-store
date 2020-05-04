import React from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";
import '../../styles/RegisterPage.css';

const Register = ({ email, username, password, registerUser, handleRegisterChange }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card card-radius">
                        <div className="card-header register-header">Register</div>
                        <div className="card-body">
                            <form className="form-horizontal" >
                                <div className="form-group">
                                    <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Enter your Email"
                                                maxLength="50" minLength="4"
                                                onChange={e => {
                                                    handleRegisterChange(e.target.value, 'email');
                                                }} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="username" id="username" placeholder="Enter your Username"
                                                maxLength="25" minLength="4" pattern="^[a-zA-Z0-9_.-]*$"
                                                onChange={e => {
                                                    handleRegisterChange(e.target.value, 'username');
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
                                                    handleRegisterChange(e.target.value, 'password');
                                                }} required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm your Password"
                                                minLength="6"
                                                onChange={e => {
                                                    handleRegisterChange(e.target.value, 'conf_password');
                                                }} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group center-div">
                                    <button className="btn btn-primary btn-lg btn-block register-button"
                                        onClick={e => {
                                            e.preventDefault();
                                            var formElement = $("form")[0];
                                            if (formElement.checkValidity()) {
                                                registerUser(email, username, password);
                                            } else {
                                                formElement.reportValidity();
                                            }
                                        }}>Register</button>
                                </div>
                                <div className="login-register">
                                    Already a member? <Link to="/login">Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Register;