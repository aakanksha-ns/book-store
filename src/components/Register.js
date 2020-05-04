import React from "react";
import $ from 'jquery';
import { Link } from "react-router-dom";
import '../styles/RegisterPage.css';
import '../styles/ChapterApp.css'
import Spinner from "./Spinner";


const showSpinner = (register_started) => {
    if (register_started) {
        return <Spinner />
    }
}

const Register = ({ email, username, password, register_started, registerUser, handleRegisterChange }) => {
    return (

        <div className="info-section">
            {showSpinner(register_started)}
            <div className="container max-width-extend">
                <div className="row disp-flex">
                    <div className="col-md-7">
                        <div className="description">
                            Think about the last good book you read. Did it make you feel more connected to others? Maybe it served as a welcome escape. Maybe it helped you rediscover the beauty in life. Did it surprise you?
                <br />
                            <br />
                As an independent bookstore, we strive to offer the same variety and richness of experience as the books on our shelves. And because the only people we’re beholden to are our customers and ourselves, we can focus on what really matters — promoting diverse perspectives, upholding the free exchange of ideas, championing the enduring power of books, and bolstering the great community of readers and authors we’re lucky to be a part of.
                <br />
                            <br />
                Thank you for supporting these lofty goals. Your choice sustains a family business with over 500 local booksellers, and allows us to follow our passion for getting the right books into the right hands, 365 days a year.
            </div>
                        <div className="row center-div">
                            <p> <Link to="/shop" className="btn btn-primary shopping-button">Start Shopping</Link></p>
                        </div>

                    </div>
                    <div className="col-md-5 register-block">
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
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;