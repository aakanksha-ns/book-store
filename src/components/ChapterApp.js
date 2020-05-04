import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import RegisterPage from "../containers/Register";
import LoginPage from "../containers/Login";
import ShopPage from "../containers/ShopPage";
import '../styles/ChapterApp.css';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";


const ChapterApp = () => {
    return (
        < Router >
            <div className="header">
                <NavigationBar />
            </div>

            <Switch>
                <Route path="/" exact component={RegisterPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/shop" exact component={ShopPage} />
            </Switch>

            <Footer />
        </Router >
    );
};

export default ChapterApp;